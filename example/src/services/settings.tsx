import { PropsWithChildren, createContext, useContext } from "react"


export type Settings = {
    isDark: boolean
}

const defaultSettings: Settings = {
    isDark: false
}


const SettingsContext = createContext({
    settings: defaultSettings,
    setSettings: (settings: Settings) => {},
})


export interface SettingsProviderProps extends PropsWithChildren {
    settings?: Settings
    setSettings?: (settings: Settings) => void
}

export function SettingsProvider(props: SettingsProviderProps) {

    const settings = props.settings ?? defaultSettings
    const setSettings = props.setSettings ?? (() => {})

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {props.children}
        </SettingsContext.Provider>
    )
}


export function useSettings() {
    return useContext(SettingsContext)
}
