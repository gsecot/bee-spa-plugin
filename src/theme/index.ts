import { borderRadius, boxShadow } from './tokens/misc'
import { colors } from './tokens/colors'
import { containerSize } from './tokens/containerSize'
import { fontFace, fontSize, headings, lineHeight } from './tokens/typography'
import { spacingObject as spacings } from './css/spacingsCSS'
import { zIndex } from './tokens/zIndex'

export const theme = {
  fontSize,
  fontFace,
  lineHeight,
  colors,
  headings,
  containerSize,
  spacings,
  zIndex,
  borderRadius,
  boxShadow,
}

export type SpacingValue = Partial<keyof typeof theme.spacings>
export type Colors = keyof typeof theme.colors
