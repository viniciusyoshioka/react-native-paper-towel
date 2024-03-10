import { DrawerToggleButton } from "@react-navigation/drawer"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useLayoutEffect, useState } from "react"
import { useMaterialTheme } from "react-material-design-provider"
import { View } from "react-native"
import { Appbar } from "react-native-paper"
import { InputHeader } from "react-native-paper-towel"

import { useSettings } from "../../services/settings"


export function InputHeaderScreen() {


    const navigation = useNavigation()
    const { colors } = useMaterialTheme()
    const { settings, setSettings } = useSettings()

    const [title, setTitle] = useState("InputHeader")


    function toggleTheme() {
        setSettings({
            ...settings,
            isDark: !settings.isDark,
        })
    }


    useFocusEffect(useCallback(() => {
        setTitle("InputHeader")
    }, []))

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <Appbar style={{ backgroundColor: colors.background }}>
                <DrawerToggleButton tintColor={colors.onBackground} />

                <InputHeader
                    value={title}
                    onChangeText={setTitle}
                    placeholder={"Insert title here..."}
                />

                <Appbar.Action
                    icon={"brightness-6"}
                    onPress={toggleTheme}
                    color={colors.onBackground}
                />
            </Appbar>
        </View>
    )
}
