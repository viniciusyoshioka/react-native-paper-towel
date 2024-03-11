import { DrawerToggleButton } from "@react-navigation/drawer"
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect, useState } from "react"
import { useMaterialTheme } from "react-material-design-provider"
import { View } from "react-native"
import { Appbar } from "react-native-paper"
import { Input, InputHeader, InputPassword } from "react-native-paper-towel"

import { useSettings } from "../../services/settings"


export function InputScreen() {


    const navigation = useNavigation()
    const { colors } = useMaterialTheme()
    const { settings, setSettings } = useSettings()

    const [titleInputHeader, setTitleInputHeader] = useState("InputHeader")
    const [titleInput, setTitleInput] = useState("Input")
    const [passwordInput, setPasswordInput] = useState("password")


    function toggleTheme() {
        setSettings({
            ...settings,
            isDark: !settings.isDark,
        })
    }


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
                    value={titleInputHeader}
                    onChangeText={setTitleInputHeader}
                    placeholder={"Insert title here..."}
                />

                <Appbar.Action
                    icon={"brightness-6"}
                    onPress={toggleTheme}
                    color={colors.onBackground}
                />
            </Appbar>

            <View style={{ flex: 1, padding: 16, gap: 16 }}>
                <Input
                    value={titleInput}
                    onChangeText={setTitleInput}
                    placeholder={"Insert input title here..."}
                />

                <InputPassword
                    value={passwordInput}
                    onChangeText={setPasswordInput}
                    placeholder={"Insert password here..."}
                />
            </View>
        </View>
    )
}
