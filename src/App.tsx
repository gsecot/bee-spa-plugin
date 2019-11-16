import { GlobalInlcudes } from './theme/GlobalIncludes'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalInlcudes />
      <div>Hello world</div>
    </HelmetProvider>
  )
}
