import { css } from '@emotion/core'

// Spacing using Fibonacci sequence
// https://codyhouse.co/ds/globals/spacing
// -space-xxxxs   -->    0.125rem
// --space-xxxs   -->    0.25rem
// --space-xxs    -->    0.375rem
// --space-xs     -->    0.5rem
// --space-sm     -->    0.75rem
// --space-md     -->    1.25rem
// --space-lg     -->    2rem
// --space-xl     -->    3.25rem
// --space-xxl    -->    5.25rem
// --space-xxxl   -->    8.5rem
// --space-xxxxl  -->    13.75rem

export const spacingsCSS = css`
  :root,
  body {
    --space-unit: 1rem;
    --space-xxxxs: calc(0.125 * var(--space-unit));
    --space-xxxs: calc(0.25 * var(--space-unit));
    --space-xxs: calc(0.375 * var(--space-unit));
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.75 * var(--space-unit));
    --space-md: calc(1.25 * var(--space-unit));
    --space-lg: calc(2 * var(--space-unit));
    --space-xl: calc(3.25 * var(--space-unit));
    --space-xxl: calc(5.25 * var(--space-unit));
    --space-xxxl: calc(8.5 * var(--space-unit));
    --space-xxxxl: calc(13.75 * var(--space-unit));
    --component-padding: var(--space-lg);
  }
`

// to be used inside component to get the spacing programmatically as componnet prop
export const spacingObject = {
  xxxxs: 'var(--space-xxxxs)',
  xxxs: 'var(--space-xxxs)',
  xxs: 'var(--space-xxs)',
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  normal: 'var(--space-unit)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  xxl: 'var(--space-xxl)',
  xxxl: 'var(--space-xxxl)',
  xxxxl: 'var(--space-xxxxl)',
  none: '0',
  component: 'var(--component-padding)',
}
