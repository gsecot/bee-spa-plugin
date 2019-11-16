import styled from '@emotion/styled'
import { theme } from 'app/theme'

export const StyledBeeEditor = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  display: block;
  width: 100%;
`

export const CustomActionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  background-color: #505659;
  padding: 1rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem;

  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};

  font-size: ${theme.fontSize.small};
  font-weight: bold;
`
