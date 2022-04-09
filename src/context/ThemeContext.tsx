import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

export interface IProviderProps {
  children?: ReactNode
}

export interface IThemeContext {
  toggleTheme: () => void
  mode: "light" | "dark"
}

export const themeContextDefautls: IThemeContext = {
  toggleTheme: () => { },
  mode: "light"
}

const themeContext = createContext<IThemeContext>(themeContextDefautls)

export const AppThemeProvider = ({ children }: IProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light")

  useEffect(() => {
    let colormode = localStorage.getItem("color-mode")
    if (colormode === "light" || colormode === "dark") {
      setMode(colormode)
    }
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark")
    }
    else {
      setMode("light")
    }
  }, [])

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: "#f0f2f5"
        },
        secondary: {
          main: "#00a884"
        },
        mode
      }
    })
  }, [mode])

  const value = {
    toggleTheme: () => {
      const new_mode = mode === "light" ? "dark" : "light"
      setMode(new_mode)
      localStorage.setItem("color-mode", new_mode)
    },
    mode
  }

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  )
}

const ThemeConsumer = () => useContext(themeContext)

export { ThemeConsumer as useTheme }

