import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { useMaterialTheme } from "react-material-design-provider"
import { Pressable, StatusBar } from "react-native"
import { Icon } from "react-native-paper-towel"

import { IconScreen } from "../screens/IconScreen"
import { LoadingModalScreen } from "../screens/LoadingModalScreen"
import { PressableScreen } from "../screens/PressableScreen"
import { useSettings } from "../services/settings"


const Drawer = createDrawerNavigator()


export function Router() {


    const { settings, setSettings } = useSettings()
    const { colors } = useMaterialTheme()


    function toggleTheme() {
        setSettings({ ...settings, isDark: !settings.isDark })
    }

    const headerRight: DrawerNavigationOptions["headerRight"] = props => (
        <Pressable onPress={toggleTheme} style={{ marginRight: 16 }}>
            <Icon name={"brightness-6"} color={props.tintColor} />
        </Pressable>
    )


    const screenOptions: DrawerNavigationOptions = {
        headerStyle: {
            backgroundColor: colors.background,
        },
        headerTintColor: colors.onBackground,
        headerShadowVisible: false,
        headerRight,
        drawerStyle: {
            backgroundColor: colors.surface,
        },
        drawerInactiveTintColor: colors.onSurfaceVariant,
        drawerActiveBackgroundColor: colors.secondaryContainer,
        drawerActiveTintColor: colors.onSecondaryContainer,
        sceneContainerStyle: {
            backgroundColor: colors.background,
        },
    }


    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={colors.background}
                barStyle={settings.isDark ? "light-content" : "dark-content"}
            />

            <Drawer.Navigator screenOptions={screenOptions}>
                <Drawer.Screen name={"Icon"} component={IconScreen} />
                <Drawer.Screen name={"LoadingModal"} component={LoadingModalScreen} />
                <Drawer.Screen name={"Pressable"} component={PressableScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
