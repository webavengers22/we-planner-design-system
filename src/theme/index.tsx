import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { ThemeStore, Types, useStore } from '~/context'
import { FC, useEffect } from 'react'
import { LocalStorageService } from '~/services/LocalStorage'

const light = {
  palette: {
    type: 'light',
    primary: '#F92F4A',
    secondary: '#160E4C',
    background: {
      paper: '#ffffff',
      default: '#eff1f5'
    },
    text: { primary: '#000000dd', secondary: '#00000099' },
    divider: 'rgba(0,0,0,0.07)',
    dividerDark: 'rgba(0,0,0,0.15)'
  }
}

const dark = {
  palette: {
    type: 'dark',
    primary: '#fa586e',
    secondary: '#443e6f',
    background: {
      paper: '#2C2C2E',
      default: '#1C1C1E'
    },
    text: { primary: '#ffffff', secondary: '#ffffffb2' },
    divider: 'rgba(255,255,255,0.07)',
    dividerDark: 'rgba(255,255,255,0.15)'
  }
}

export const themes = { light, dark }

const ThemeDefault: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}) => {
  const { state } = useStore()
  const theme = state?.theme

  const defaultTheme = themes[theme]

  return (
    <ThemeProviderStyled theme={defaultTheme}>{children}</ThemeProviderStyled>
  )
}

export const Theme: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}) => {
  const { dispatch } = useStore()

  useEffect(() => {
    const theme = LocalStorageService.getItem<ThemeStore>('@theme') ?? 'light'

    dispatch({
      type: Types.changeTheme,
      theme
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ThemeDefault>{children}</ThemeDefault>
}
