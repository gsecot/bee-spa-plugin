import React from 'react'
import { GlobalInlcudes } from './theme/GlobalIncludes'
import { HelmetProvider } from 'react-helmet-async'
import { BeeEditor } from './components/BeeEditor'
import { downloadStreamFile } from './utils/downloadFile'

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalInlcudes />
      <BeeEditor
        containerID='bee-plugin-container'
        onSaveHtml={html => {
          const timeStamp = new Date().getTime()
          downloadStreamFile(html, 'text/plain', `email_${timeStamp}.html`)
        }}
        onSaveJson={json => {
          const timeStamp = new Date().getTime()
          downloadStreamFile(json, 'text/plain', `json_${timeStamp}.json`)
        }}
      />
    </HelmetProvider>
  )
}
