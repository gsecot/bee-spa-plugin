import React from 'react'
import { CustomActionsContainer, Button } from './styled'

interface Props {
  editorIsLoading: boolean
  saveHtmlIsEnabled: boolean
  saveJsonIsEnabled: boolean
  isPreviewMode: boolean
  onSaveJsonCallback: () => void
  onSaveHtmlCallback: () => void
  onPreviewCallback: () => void
}

export const CustomActions: React.FC<Props> = ({
  editorIsLoading,
  onSaveJsonCallback,
  onSaveHtmlCallback,
  onPreviewCallback,
  saveHtmlIsEnabled,
  saveJsonIsEnabled,
  isPreviewMode,
}) => {
  if (editorIsLoading) {
    // Bee is loading
    return null
  }

  return (
    <CustomActionsContainer>
      <Button
        onClick={() => {
          if (saveHtmlIsEnabled) {
            onSaveHtmlCallback()
          }
        }}
      >
        {saveHtmlIsEnabled ? 'SAVE HTML' : 'GENERATING'}
      </Button>
      <Button
        onClick={() => {
          if (saveJsonIsEnabled) {
            onSaveJsonCallback()
          }
        }}
      >
        {saveJsonIsEnabled ? 'EXPORT JSON' : 'GENERATING'}
      </Button>
      <Button
        onClick={() => {
          onPreviewCallback()
        }}
      >
        {isPreviewMode ? 'BACK TO EDITOR' : 'PREVIEW MODE'}
      </Button>
    </CustomActionsContainer>
  )
}
