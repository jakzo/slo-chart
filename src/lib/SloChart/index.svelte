<script type="ts">
  import { increaseDate } from "../../util";
  import {
    ResolutionUnit,
    EventType,
    type Slo,
    type SloEvent,
  } from "../../types";
  import Tooltip from "./Tooltip.svelte";
  import {
    MONTHS,
    BAR_WIDTH,
    BUDGET_MAX,
    addDays,
    formatTickBudgets,
    formatTickCounts,
    getIndexX,
    getValueHeight,
    getValueY,
    ticks,
    zip,
    groupEvents,
    calculateErrorBudget,
  } from "./utils";

  const MARGIN_LEFT = "6rem";
  const MARGIN_RIGHT = "6rem";
  const MARGIN_TOP = "3rem";
  const MARGIN_BOTTOM = "4rem";

  export let slo: Slo;
  export let startDate: Date;
  export let good: number[];
  export let bad: number[];
  /** Must be ordered by `ts` ascending. */
  export let events: SloEvent[];
  export let resolutionUnit: ResolutionUnit; // TODO
  export let resolutionAmount: number; // TODO

  const EVENT_LOZENGES = [
    [EventType.BREACH, "bg-red-500"],
    [EventType.BURN, "bg-yellow-500"],
  ] as const;

  let groupedEvents: SloEvent[][];
  $: {
    const endDate = new Date(startDate);
    increaseDate(endDate, resolutionUnit, resolutionAmount * good.length);
    groupedEvents = groupEvents(
      events,
      startDate,
      endDate,
      ResolutionUnit.DAY,
      1
    ).slice(-slo.windowDays);
  }

  /**
   * Allows focusing on individual data points (eg. so impaired users can select
   * an individual data point and have the screen reader read its value).
   * Enable this if the chart is large and the main focus of the page.
   * Otherwise the chart will appear less detailed.
   */
  export let isMainChart = false;
  let tabindex: number | undefined;
  $: tabindex = isMainChart ? 0 : undefined;

  let data: [Date, number, number, number][];
  $: {
    const errorBudget = calculateErrorBudget(slo, good, bad);
    data = good
      .map<[Date, number, number, number]>((n, i) => [
        addDays(i, startDate),
        n,
        bad[i],
        errorBudget[i],
      ])
      .slice(-slo.windowDays);
  }

  let dayWidth: number;
  let barWidth: number;
  $: dayWidth = 100 / data.length;
  $: barWidth = dayWidth * BAR_WIDTH;

  let countTicks: [number, string][];
  let minCountTick: number;
  let maxCountTick: number;
  $: {
    const t = ticks(
      data.map(([, good, bad]) => good + bad),
      { min: 0 }
    );
    countTicks = zip(t, formatTickCounts(t));
    minCountTick = Math.min(...t);
    maxCountTick = Math.max(...t);
  }

  let budgetTicks: [number, string][];
  let minBudgetTick: number;
  let maxBudgetTick: number;
  $: {
    const t = ticks(
      data.map(([, , , budget]) => budget),
      { max: BUDGET_MAX, suggestedMin: 0 }
    );
    budgetTicks = zip(t, formatTickBudgets(t));
    minBudgetTick = Math.min(...t);
    maxBudgetTick = Math.max(...t);
  }

  let budgetEmptyY: number;
  $: budgetEmptyY = (maxBudgetTick / (maxBudgetTick - minBudgetTick)) * 100;

  let focusIdx: number | undefined;
  let focusIdxCounter = 0;
  $: focusIdx, focusIdxCounter++;

  let container: HTMLElement | undefined;
</script>

<div class="h-full w-full overflow-hidden" role="graphics-document">
  <div
    bind:this={container}
    class="relative"
    style:margin-left={MARGIN_LEFT}
    style:margin-right={MARGIN_RIGHT}
    style:margin-top={MARGIN_TOP}
    style:height="calc(100% - {MARGIN_BOTTOM} - {MARGIN_TOP})"
  >
    <svg
      version="1.1"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      class="overflow-visible"
    >
      <g>
        {#each budgetTicks as [value], i (i)}
          {@const y = getValueY(minBudgetTick, maxBudgetTick, value)}
          {#if value !== 0}
            <line
              class="stroke-gray-300 stroke-2 [stroke-dasharray:5_5] pointer-events-none"
              x1={0}
              x2={100}
              y1={y}
              y2={y}
            />
          {/if}
        {/each}
      </g>

      <g class="animation-chart-load origin-bottom" role="graphics-object">
        {#each data as [date, good, bad, budget], i (i)}
          {@const dayLeft = dayWidth * i}
          {@const barLeft = dayLeft + (dayWidth - barWidth) / 2}

          <g
            role="graphics-symbol"
            aria-roledescription="bar"
            {tabindex}
            class="group focus:outline-none"
            aria-label="{date.toLocaleString(undefined, {
              dateStyle: 'medium',
            })},
Error budget: {budget.toFixed(1)}%,
Good events: {good},
Bad events: {bad}"
            on:mousemove={() => {
              if (focusIdx !== i) focusIdx = i;
            }}
            on:focus={() => {
              if (focusIdx !== i) focusIdx = i;
            }}
            on:mouseleave={() => {
              if (focusIdx !== i) return;
              const counter = focusIdxCounter;
              setTimeout(() => {
                if (counter === focusIdxCounter) focusIdx = undefined;
              }, 0);
            }}
            on:blur={() => {
              if (focusIdx !== i) return;
              const counter = focusIdxCounter;
              setTimeout(() => {
                if (counter === focusIdxCounter) focusIdx = undefined;
              }, 0);
            }}
          >
            <rect
              class="group-hover:fill-gray-500/10 group-focus:fill-[#66c]/20 fill-transparent"
              x={dayLeft}
              y={0}
              width={dayWidth}
              height={100}
            />

            <rect
              class="fill-[#f66]/80"
              x={barLeft}
              y={getValueY(minCountTick, maxCountTick, bad)}
              width={barWidth}
              height={getValueHeight(minCountTick, maxCountTick, bad)}
            />

            <rect
              class="fill-[#beb]/80"
              x={barLeft}
              y={getValueY(minCountTick, maxCountTick, bad + good)}
              width={barWidth}
              height={getValueHeight(minCountTick, maxCountTick, good)}
            />
          </g>
        {/each}
      </g>

      <line
        class="stroke-red-400 stroke-[3] [stroke-dasharray:10_10] pointer-events-none"
        x1={0}
        x2={100}
        y1={budgetEmptyY}
        y2={budgetEmptyY}
      />

      <g
        class="animation-chart-load origin-top pointer-events-none"
        role="graphics-symbol"
        aria-roledescription="line"
      >
        <path
          class="fill-[none] stroke-slate-800 dark:stroke-slate-200 [stroke-linecap:round] stroke-[4]"
          d="M{data
            .map(
              ([, , , budget], i) =>
                `${getIndexX(data.length, i)},${getValueY(
                  minBudgetTick,
                  maxBudgetTick,
                  budget
                )}`
            )
            .join('L')}"
        />
      </g>
    </svg>

    <!-- Hack to render point circles on error budget line.
         We need to do this because <circle> elements will stretch and
         become large ovals as the SVG scales. -->
    <div>
      {#each data as [_1, _2, _3, budget], i (i)}
        {@const x = getIndexX(data.length, i)}
        {@const y = getValueY(minBudgetTick, maxBudgetTick, budget)}
        <div
          class="absolute bg-slate-800 dark:bg-slate-200 rounded-full border-white dark:border-slate-800 border-2 w-[12px] h-[12px] translate-x-[-50%] translate-y-[-50%] pointer-events-none animation-chart-load origin-center"
          style:left="{x}%"
          style:top="{y}%"
        />
      {/each}
    </div>

    <div
      class="absolute left-0 ml-2 mt-1 text-red-400 uppercase"
      style:top="{getValueY(minBudgetTick, maxBudgetTick, 0)}%"
    >
      Budget Empty
    </div>

    <div aria-hidden={true}>
      <div>
        {#each data as [date], i (date.getTime())}
          {@const dayLeft = dayWidth * i}
          <div
            class="tick translate-x-[-4px] translate-y-[20px] rotate-[-45deg] top-full"
            style:left="{dayLeft + dayWidth / 2}%"
          >
            <div class="float-right">
              {#if i === 0 || date.getDate() === 1}
                {MONTHS[date.getMonth()]}{" "}
              {/if}
              {date.getDate()}
            </div>
          </div>
        {/each}
      </div>

      <div>
        <div
          class="absolute text-right mb-3 mr-4 bottom-full right-full"
          aria-hidden={true}
        >
          Budget
        </div>
        {#each countTicks as [value, label] (value)}
          <div
            class="tick translate-x-[1rem] left-full"
            style:top="{getValueY(minCountTick, maxCountTick, value)}%"
          >
            {label}
          </div>
        {/each}
      </div>

      <div>
        <div
          class="absolute right-0 mb-3 ml-4 bottom-full left-full"
          aria-hidden={true}
        >
          Counts
        </div>
        {#each budgetTicks as [value, label] (value)}
          <div
            class="tick translate-x-[-1rem] right-full"
            style:top="{getValueY(minBudgetTick, maxBudgetTick, value)}%"
          >
            <div class="float-right">
              {label}
            </div>
          </div>
        {/each}
      </div>

      <div>
        {#each groupedEvents as group, i}
          {#if group.length > 0}
            <div
              class="absolute mt-2 flex flex-col items-center justify-center pointer-events-none"
              style:left="{dayWidth * (i + 0.5)}%"
              style:top="{getValueY(minBudgetTick, maxBudgetTick, data[i][3])}%"
            >
              {#each EVENT_LOZENGES as [eventType, color], j (j)}
                {@const count = group.reduce(
                  (n, event) =>
                    // Not using `event.type` because of:
                    // https://github.com/sveltejs/svelte/issues/7206
                    n + (event["type"] === eventType ? 1 : 0),
                  0
                )}
                {#if count > 0}
                  <div
                    class="min-w-[1.25rem] h-5 mt-3 rounded-full flex items-center justify-center translate-x-[-50%] translate-y-[-50%] text-xs {color} text-white animation-chart-load origin-center"
                  >
                    {count}
                  </div>
                {/if}
              {/each}
            </div>
          {/if}
        {/each}
      </div>

      {#if focusIdx !== undefined}
        <Tooltip
          itemLeft={dayWidth * focusIdx}
          itemWidth={dayWidth}
          {container}
          data={data[focusIdx]}
        />
      {/if}
    </div>
  </div>
</div>

<style>
  path,
  line {
    vector-effect: non-scaling-stroke;
  }

  .tick {
    position: absolute;
    width: 1px;
    height: 1px;
    line-height: 1px;
    white-space: nowrap;
  }

  .animation-chart-load {
    animation: chart-load-move 500ms ease;
  }
  div.animation-chart-load {
    animation: chart-load-grow 1000ms ease;
  }
  @media (prefers-reduced-motion: reduce) {
    div.animation-chart-load,
    .animation-chart-load {
      animation: chart-load-fade 1000ms ease;
    }
  }
  @keyframes chart-load-move {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
  @keyframes chart-load-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes chart-load-grow {
    from {
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
    50% {
      transform: translateX(-50%) translateY(-50%) scale(0);
    }
    to {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
</style>
