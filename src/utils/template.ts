import { useState, useEffect } from 'react'

const getTemplate = async (url: string) => {
  const template = await fetch(url)
  return template.json()
}

export const useTemplate = (url: string) => {
  const [template, setTemplate] = useState<string | null>('')

  useEffect(() => {
    if (url) {
      getTemplate(url).then(template => setTemplate(template))
    }
  }, [])

  return template
}
