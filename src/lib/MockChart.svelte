<script type="ts">
  import SloChart from "$lib/SloChart/index.svelte";
  import { generateMockSlos } from "../mocks";
  import { ResolutionUnit } from "../types";

  const mockSlos = generateMockSlos();
  const id = Object.keys(mockSlos.slos)[0];
  const slo = mockSlos.slos[id];
  const { events, segments } = mockSlos.data[id];
  const resolutionUnit = ResolutionUnit.DAY;
  const resolutionAmount = 1;
  const { start, good, bad } = segments[ResolutionUnit.DAY]![0];
</script>

<SloChart
  isMainChart
  {slo}
  {events}
  {resolutionUnit}
  {resolutionAmount}
  startDate={start}
  {good}
  {bad}
/>
