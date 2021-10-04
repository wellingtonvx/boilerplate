import { GlobalStyle } from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyle />
    </>
  )
]
