import { useState, useEffect } from 'react'

const getToken = async () => {
  const auth = await fetch('http://localhost:5000/api/auth')
  const token = await auth.json()
  return token
}

export const useAuthToken = () => {
  const [jwtToken, setJwtToken] = useState('')

  useEffect(() => {
    getToken().then(token => setJwtToken(token))
  }, [])

  return jwtToken
}
