import React, { useEffect, useState, Fragment } from 'react'
import { useAuthToken } from 'app/utils/auth'
import { useTemplate } from 'app/utils/template'
import { StyledEditor } from './styled'

interface Props {
  containerID: string
  onSaveJson: (jsonFile: FileJSON) => void
  onSaveHtml: (htmlFile: FileHTML) => void
}

export const BeeEditor: React.FC<Props> = ({
  containerID,
  onSaveHtml,
  onSaveJson,
}) => {
  //  BeePlugin loaded from global window obj
  const BeePlugin = (window as any).BeePlugin

  // Fetching auth token and default json template
  const jwtToken = useAuthToken()
  const defaultTemplate = useTemplate(
    'https://rsrc.getbee.io/api/templates/m-bee'
  )

  // Preparing empty bee instance to be filled during plugin initialization
  const [beeInstance, setBeeInstace] = useState<Bee>()

  // Config file for Bee Editor
  const config = {
    uid: 'test-user',
    container: containerID,
    language: 'it-IT',
    onSaveAsTemplate: (jsonFile: FileJSON) => {
      onSaveJson(jsonFile)
    },
    onSend: (htmlFile: FileHTML) => {
      onSaveHtml(htmlFile)
    },
  }

  // Initializing plugin once we get jwtToken and defaultTemplate
  useEffect(() => {
    if (BeePlugin && jwtToken && defaultTemplate) {
      BeePlugin.create(jwtToken, config, function(instance: Bee) {
        setBeeInstace(instance)
      })
    }
  }, [jwtToken, defaultTemplate])

  // if beeInstace exists, we can start it
  if (beeInstance && beeInstance.start) {
    beeInstance.start(defaultTemplate)
  }

  return (
    <Fragment>
      {beeInstance && beeInstance.save ? (
        <div>
          <button
            onClick={() => {
              beeInstance.send()
            }}
          >
            SAVE HTML
          </button>
          <button
            onClick={() => {
              beeInstance.saveAsTemplate()
            }}
          >
            EXPORT JSON
          </button>
        </div>
      ) : (
        <div>Loading Bee...</div>
      )}
      <StyledEditor id={containerID}></StyledEditor>
    </Fragment>
  )
}

type Bee = any
type FileJSON = any
type FileHTML = any
