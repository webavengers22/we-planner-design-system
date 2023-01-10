import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  place-content: center;

  min-height: 100vh;
  transition: background-color 0.5s ease-in-out;

  background: ${({ theme }) => theme.palette.background.default};
`

export const Text = styled.label`
  margin-bottom: 2rem;
  font-size: 3rem;

  transition: all 0.5s ease-in-out;

  color: ${({ theme }) => theme.palette.text.secondary};
`
