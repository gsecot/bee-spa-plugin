import React from 'react'
import { Global } from '@emotion/core'
import { Helmet } from 'react-helmet-async'

import favicon from 'app/assets/favicon.ico'
import { spacingsCSS } from './css/spacingsCSS'
import { resetCSS } from './css/resetCSS'
import { headingsCSS } from './css/headingsCSS'

// Be sure to load HelmetProvider on top of your App
export const GlobalInlcudes = () => (
  <>
    <Global styles={spacingsCSS} />
    <Global styles={resetCSS} />
    <Global styles={headingsCSS} />
    <Helmet>
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
    </Helmet>
  </>
)
