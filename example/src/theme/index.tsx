import { PropsWithChildren } from "react"
import {
  MaterialDarkTheme,
  MaterialLightTheme,
  MaterialProvider,
} from "react-material-design-provider"
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper"

import { useSettings } from "../services/settings"


export function ThemeProvider({ children }: PropsWithChildren) {


  const { settings } = useSettings()

  const paperTheme = settings.isDark ? MD3DarkTheme : MD3LightTheme
  const materialTheme = settings.isDark ? MaterialDarkTheme : MaterialLightTheme


  return (
    <PaperProvider theme={paperTheme}>
      <MaterialProvider theme={materialTheme}>
        {children}
      </MaterialProvider>
    </PaperProvider>
  )
}
