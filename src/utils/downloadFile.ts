export const downloadStreamFile = (
  stream: any,
  type: FileType,
  fileName: string
) => {
  const element = document.createElement('a')
  const file = new Blob([stream], {
    type,
  })

  element.href = URL.createObjectURL(file)
  element.download = fileName
  document.body.appendChild(element)
  element.click()
}

type FileType = 'text/plain'
