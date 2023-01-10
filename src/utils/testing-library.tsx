import { render as rtlRender } from '@testing-library/react'
import { beforeEach, describe, expect, test, it } from 'vitest'

import GlobalStyles from '~/styles/global'
import { Theme } from '~/theme'

export * from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const render = (ui: any, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: JSX.Element }) => {
    return (
      <Theme>
        <>
          <GlobalStyles />
          {children}
        </>
      </Theme>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export { render, beforeEach, describe, expect, test, it }
