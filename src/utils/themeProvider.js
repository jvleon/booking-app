import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "#f64f59",
    secondary: "#12c2e9",
    altern: "#c471ed",
    inputBorder: "#cccccc"
  }
}

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default ThemeWrapper
