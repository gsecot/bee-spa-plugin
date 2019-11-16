import { css } from '@emotion/core'
import { theme } from 'app/theme'

export const resetCSS = css`
  html,
  body {
    box-sizing: border-box;
    font-family: ${theme.fontFace.sansSerif};
    font-size: ${theme.fontSize.base};
    color: ${theme.colors.black};
    background-color: #fff;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  input,
  textarea,
  select,
  button {
    font-family: ${theme.fontFace.sansSerif};
  }

  a {
    color: ${theme.colors.primary};
  }

  textarea,
  input[type='text'],
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='button'],
  input[type='submit'] {
    -webkit-appearance: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`
