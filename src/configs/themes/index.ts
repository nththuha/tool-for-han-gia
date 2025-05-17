import { createTheme, CSSVariablesResolver, MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  defaultRadius: 'sm',
  fontFamily: 'IBM Plex Sans,-apple-system,BlinkMacSystemFont,Roboto,Arial,sans-serif',
  components: {},
  colors: {
    primary: [
      '#e4fefb',
      '#d5f7f3',
      '#aeede5',
      '#83e3d7',
      '#60dacb',
      '#4ad4c3',
      '#3bd2c0',
      '#2bc2b0',
      '#17a596',
      '#009081',
    ],
  },
})

// https://mantine.dev/styles/css-variables/#css-variables-resolver
export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {},
})
