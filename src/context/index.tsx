import React, { createContext, useContext, useReducer } from 'react'

import { StoreState, reducer, Actions } from './reducer'

interface IStoreContext {
  state: StoreState
  dispatch: React.Dispatch<Actions>
}

export const initialState: StoreState = {
  theme: 'dark'
}

export const StoreContext = createContext<IStoreContext>({
  state: initialState,
  dispatch: () => null
})

export const StoreProvider: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = (): IStoreContext => {
  const { state, dispatch } = useContext(StoreContext)

  return { state, dispatch }
}

export * from './reducer'
