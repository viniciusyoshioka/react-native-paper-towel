import { useMaterialTheme } from "react-material-design-provider"
import { ScrollView, View } from "react-native"
import { Text } from "react-native-paper"
import { Icon, IconGroup, OptionalIconProps } from "react-native-paper-towel"


export function IconScreen() {


    const { colors } = useMaterialTheme()


    const commonIconProps: OptionalIconProps<IconGroup> = {
        size: 32,
        color: colors.onBackground,
    }


    return (
        <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
            <View style={{ gap: 8 }}>
                <Text variant={"titleLarge"}>Material Community</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                    <Icon {...commonIconProps} name={"plus"} />
                    <Icon {...commonIconProps} name={"menu"} />
                    <Icon {...commonIconProps} name={"dots-vertical"} />
                    <Icon {...commonIconProps} name={"account-circle-outline"} />
                    <Icon {...commonIconProps} name={"application-brackets-outline"} />
                    <Icon {...commonIconProps} name={"backup-restore"} />
                    <Icon {...commonIconProps} name={"barcode-scan"} />
                    <Icon {...commonIconProps} name={"battery-low"} />
                    <Icon {...commonIconProps} name={"beaker-outline"} />
                    <Icon {...commonIconProps} name={"brain"} />
                    <Icon {...commonIconProps} name={"bug"} />
                    <Icon {...commonIconProps} name={"bug-outline"} />
                    <Icon {...commonIconProps} name={"cake"} />
                    <Icon {...commonIconProps} name={"cake-variant"} />
                    <Icon {...commonIconProps} name={"chart-bar"} />
                    <Icon {...commonIconProps} name={"check-decagram-outline"} />
                    <Icon {...commonIconProps} name={"cheese"} />
                    <Icon {...commonIconProps} name={"cloud-sync-outline"} />
                    <Icon {...commonIconProps} name={"dialpad"} />
                    <Icon {...commonIconProps} name={"dna"} />
                    <Icon {...commonIconProps} name={"fingerprint"} />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text variant={"titleLarge"}>Material - regular</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                    <Icon {...commonIconProps} group={"material"} name={"thumb-up"} />
                    <Icon {...commonIconProps} group={"material"} name={"visibility-off"} />
                    <Icon {...commonIconProps} group={"material"} name={"fingerprint"} />
                    <Icon {...commonIconProps} group={"material"} name={"bookmark-border"} />
                    <Icon {...commonIconProps} group={"material"} name={"done-outline"} />
                    <Icon {...commonIconProps} group={"material"} name={"assignment-ind"} />
                    <Icon {...commonIconProps} group={"material"} name={"dns"} />
                    <Icon {...commonIconProps} group={"material"} name={"source"} />
                    <Icon {...commonIconProps} group={"material"} name={"dangerous"} />
                    <Icon {...commonIconProps} group={"material"} name={"lock-open"} />
                    <Icon {...commonIconProps} group={"material"} name={"disabled-by-default"} />
                    <Icon {...commonIconProps} group={"material"} name={"edit-off"} />
                    <Icon {...commonIconProps} group={"material"} name={"lightbulb-outline"} />
                    <Icon {...commonIconProps} group={"material"} name={"lightbulb-circle"} />
                    <Icon {...commonIconProps} group={"material"} name={"install-mobile"} />
                    <Icon {...commonIconProps} group={"material"} name={"fullscreen"} />
                    <Icon {...commonIconProps} group={"material"} name={"notifications"} />
                    <Icon {...commonIconProps} group={"material"} name={"cake"} />
                    <Icon {...commonIconProps} group={"material"} name={"thunderstorm"} />
                    <Icon {...commonIconProps} group={"material"} name={"image"} />
                    <Icon {...commonIconProps} group={"material"} name={"timer"} />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text variant={"titleLarge"}>Material - outlined</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                    <Icon {...commonIconProps} group={"material"} outlined name={"thumb-up"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"visibility-off"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"fingerprint"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"bookmark-border"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"done-outline"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"assignment-ind"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"dns"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"source"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"dangerous"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"lock-open"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"disabled-by-default"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"edit-off"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"lightbulb-outline"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"lightbulb-circle"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"install-mobile"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"fullscreen"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"notifications"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"cake"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"thunderstorm"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"image"} />
                    <Icon {...commonIconProps} group={"material"} outlined name={"timer"} />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text variant={"titleLarge"}>Material - round</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                    <Icon {...commonIconProps} group={"material"} round name={"thumb-up"} />
                    <Icon {...commonIconProps} group={"material"} round name={"visibility-off"} />
                    <Icon {...commonIconProps} group={"material"} round name={"fingerprint"} />
                    <Icon {...commonIconProps} group={"material"} round name={"bookmark-border"} />
                    <Icon {...commonIconProps} group={"material"} round name={"done-outline"} />
                    <Icon {...commonIconProps} group={"material"} round name={"assignment-ind"} />
                    <Icon {...commonIconProps} group={"material"} round name={"dns"} />
                    <Icon {...commonIconProps} group={"material"} round name={"source"} />
                    <Icon {...commonIconProps} group={"material"} round name={"dangerous"} />
                    <Icon {...commonIconProps} group={"material"} round name={"lock-open"} />
                    <Icon {...commonIconProps} group={"material"} round name={"disabled-by-default"} />
                    <Icon {...commonIconProps} group={"material"} round name={"edit-off"} />
                    <Icon {...commonIconProps} group={"material"} round name={"lightbulb-outline"} />
                    <Icon {...commonIconProps} group={"material"} round name={"lightbulb-circle"} />
                    <Icon {...commonIconProps} group={"material"} round name={"install-mobile"} />
                    <Icon {...commonIconProps} group={"material"} round name={"fullscreen"} />
                    <Icon {...commonIconProps} group={"material"} round name={"notifications"} />
                    <Icon {...commonIconProps} group={"material"} round name={"cake"} />
                    <Icon {...commonIconProps} group={"material"} round name={"thunderstorm"} />
                    <Icon {...commonIconProps} group={"material"} round name={"image"} />
                    <Icon {...commonIconProps} group={"material"} round name={"timer"} />
                </View>
            </View>

            <View style={{ gap: 8 }}>
                <Text variant={"titleLarge"}>Material - sharp</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                    <Icon {...commonIconProps} group={"material"} sharp name={"thumb-up"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"visibility-off"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"fingerprint"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"bookmark-border"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"done-outline"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"assignment-ind"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"dns"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"source"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"dangerous"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"lock-open"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"disabled-by-default"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"edit-off"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"lightbulb-outline"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"lightbulb-circle"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"install-mobile"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"fullscreen"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"notifications"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"cake"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"thunderstorm"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"image"} />
                    <Icon {...commonIconProps} group={"material"} sharp name={"timer"} />
                </View>
            </View>
        </ScrollView>
    )
}
