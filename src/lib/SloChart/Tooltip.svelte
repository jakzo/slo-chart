<script type="ts">
  import { afterUpdate } from "svelte";
  import { fly } from "svelte/transition";

  export let itemLeft: number;
  export let itemWidth: number;
  export let container: HTMLElement | undefined;
  export let data: [Date, number, number, number];

  let isRight = false;

  let el: HTMLDivElement;
  afterUpdate(() => {
    isRight =
      container !== undefined &&
      itemLeft - (el.offsetWidth / container.offsetWidth) * 100 < 0;
  });
  // TODO: Is there a memory leak with the fly transition?
</script>

<div
  bind:this={el}
  transition:fly={{ duration: 200, y: 50 }}
  class="absolute top-0 bg-black/80 text-white p-2 rounded pointer-events-none"
  style:right={isRight ? "unset" : `${100 - itemLeft}%`}
  style:left={isRight ? `${itemLeft + itemWidth}%` : "unset"}
>
  <h3 class="text-lg">
    {data[0].toLocaleString(undefined, {
      dateStyle: "medium",
    })}
  </h3>
  <table class="text-sm">
    <tr><td>Error budget:</td> <td>{data[3].toFixed(1)}%</td></tr>
    <tr><td>Good events:</td> <td>{data[1]}</td></tr>
    <tr><td>Bad events:</td> <td>{data[2]}</td></tr>
  </table>
</div>
