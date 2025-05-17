import { createTheme, CSSVariablesResolver, MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  defaultRadius: 'sm',
  fontFamily: 'IBM Plex Sans,-apple-system,BlinkMacSystemFont,Roboto,Arial,sans-serif',
  components: {},
  colors: {
    primary: [
      '#fff4e1',
      '#ffe8cc',
      '#fed09b',
      '#fdb766',
      '#fca13a',
      '#fc931d',
      '#fc8a08',
      '#e17800',
      '#c86a00',
      '#af5a00',
    ],
  },
})

// https://mantine.dev/styles/css-variables/#css-variables-resolver
export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {},
})
