import { useState } from "react"
import { useColorScheme } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Settings, SettingsProvider } from "./services/settings"
import { ThemeProvider } from "./theme"


export function App() {


    const colorScheme = useColorScheme()
    const [settings, setSettings] = useState<Settings>({
        isDark: colorScheme === "dark",
    })


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SettingsProvider settings={settings} setSettings={setSettings}>
                <ThemeProvider>

                </ThemeProvider>
            </SettingsProvider>
        </GestureHandlerRootView>
    )
}
