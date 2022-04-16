Example of an accessible chart.

## Why is this chart better than other charts?

- Individual days can be selected and read by screen readers
  - Pressing TAB allows selecting a day or clicking with the mouse
- The chart is SSR compatible and will render even if JS is disabled
  - Everything works with JS disabled except for the tooltip on hover
- Responsive design
  - Resizing the window will cause the chart to resize with no loss in quality
  - It is even responsive when JS is disabled!
- Animation on load which respects `prefer-reduced-motion`
  - If the user has this set then the bars and line will fade in instead of growing
- <s>Dark theme</s>
  - Actually I didn't get around to this 😅
