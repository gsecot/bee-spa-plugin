import React, { useEffect, useState } from 'react'
import { useAuthToken } from 'app/utils/auth'
import { useTemplate } from 'app/utils/template'
import { StyledBeeEditor, Container } from './styled'
import { CustomActions } from './CustomActions'

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

  // internal state for external custom actions
  const [isGeneratingHtml, setIsGeneratingHtml] = useState(false)
  const [isGeneratingJson, setIsGeneratingJson] = useState(false)
  const [isPreviewMode, setPreviewMode] = useState(false)

  // Config file for Bee Editor (including callbacks for events)
  const config = {
    uid: 'test-user',
    container: containerID,
    language: 'it-IT',
    onSaveAsTemplate: (jsonFile: FileJSON) => {
      onSaveJson(jsonFile)
      setIsGeneratingJson(false)
    },
    onSend: (htmlFile: FileHTML) => {
      onSaveHtml(htmlFile)
      setIsGeneratingHtml(false)
    },
    onTogglePreview: (state: boolean) => {
      setPreviewMode(state)
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
  useEffect(() => {
    if (beeInstance && beeInstance.start) {
      beeInstance.start(defaultTemplate)
    }
  }, [beeInstance])

  const editorIsLoading = !(beeInstance && beeInstance.save)
  return (
    <Container>
      <CustomActions
        editorIsLoading={editorIsLoading}
        saveHtmlIsEnabled={!isGeneratingHtml}
        saveJsonIsEnabled={!isGeneratingJson}
        isPreviewMode={isPreviewMode}
        onSaveHtmlCallback={() => {
          setIsGeneratingHtml(true)
          beeInstance.send()
        }}
        onSaveJsonCallback={() => {
          setIsGeneratingJson(true)
          beeInstance.saveAsTemplate()
        }}
        onPreviewCallback={() => {
          beeInstance.togglePreview()
        }}
      />
      <StyledBeeEditor id={containerID}></StyledBeeEditor>
    </Container>
  )
}

type Bee = any
type FileJSON = any
type FileHTML = any
