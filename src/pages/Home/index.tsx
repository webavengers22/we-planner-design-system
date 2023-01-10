import React from 'react'
import Switch from '~/components/Switch'

import { useStore } from '~/context'
import { useTheme } from '~/hooks'

import { Container, Text } from './styles'

const Home: React.FC = () => {
  const { state } = useStore()

  const { changeTheme } = useTheme()

  return (
    <Container>
      <Text>Boilerplate Vite</Text>

      <Switch
        selected={state.theme === 'dark' ? true : false}
        onChange={changeTheme}
      />
    </Container>
  )
}

export default Home
