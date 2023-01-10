export type ThemeStore = 'light' | 'dark'

export interface StoreState {
  theme: ThemeStore
}

export enum Types {
  changeTheme = 'CHANGE_THEME'
}

export type Actions = {
  type: Types.changeTheme
  theme: ThemeStore
}

export const reducer = (state: StoreState, action: Actions) => {
  switch (action.type) {
    case Types.changeTheme:
      return { ...state, theme: action.theme }
    default:
      return state
  }
}
