import { LocalStorageService } from '~/services/LocalStorage'
import { Types, useStore } from '~/context'

export const useTheme = () => {
  const { state, dispatch } = useStore()

  const changeTheme = () => {
    const newtheme = state.theme === 'light' ? 'dark' : 'light'

    dispatch({
      type: Types.changeTheme,
      theme: newtheme
    })

    LocalStorageService.setItem('@theme', newtheme)
  }

  return { changeTheme }
}
