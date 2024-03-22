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

  const regularMaterialIconProps: OptionalIconProps<"material"> = {
    ...commonIconProps,
    group: "material",
  }

  const outlinedMaterialIconProps: OptionalIconProps<"material"> = {
    ...regularMaterialIconProps,
    outlined: true,
  }

  const roundMaterialIconProps: OptionalIconProps<"material"> = {
    ...regularMaterialIconProps,
    round: true,
  }

  const sharpMaterialIconProps: OptionalIconProps<"material"> = {
    ...regularMaterialIconProps,
    sharp: true,
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
          <Icon {...regularMaterialIconProps} name={"thumb-up"} />
          <Icon {...regularMaterialIconProps} name={"visibility-off"} />
          <Icon {...regularMaterialIconProps} name={"fingerprint"} />
          <Icon {...regularMaterialIconProps} name={"bookmark-border"} />
          <Icon {...regularMaterialIconProps} name={"done-outline"} />
          <Icon {...regularMaterialIconProps} name={"assignment-ind"} />
          <Icon {...regularMaterialIconProps} name={"dns"} />
          <Icon {...regularMaterialIconProps} name={"source"} />
          <Icon {...regularMaterialIconProps} name={"dangerous"} />
          <Icon {...regularMaterialIconProps} name={"lock-open"} />
          <Icon {...regularMaterialIconProps} name={"disabled-by-default"} />
          <Icon {...regularMaterialIconProps} name={"edit-off"} />
          <Icon {...regularMaterialIconProps} name={"lightbulb-outline"} />
          <Icon {...regularMaterialIconProps} name={"lightbulb-circle"} />
          <Icon {...regularMaterialIconProps} name={"install-mobile"} />
          <Icon {...regularMaterialIconProps} name={"fullscreen"} />
          <Icon {...regularMaterialIconProps} name={"notifications"} />
          <Icon {...regularMaterialIconProps} name={"cake"} />
          <Icon {...regularMaterialIconProps} name={"thunderstorm"} />
          <Icon {...regularMaterialIconProps} name={"image"} />
          <Icon {...regularMaterialIconProps} name={"timer"} />
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text variant={"titleLarge"}>Material - outlined</Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
          <Icon {...outlinedMaterialIconProps} name={"thumb-up"} />
          <Icon {...outlinedMaterialIconProps} name={"visibility-off"} />
          <Icon {...outlinedMaterialIconProps} name={"fingerprint"} />
          <Icon {...outlinedMaterialIconProps} name={"bookmark-border"} />
          <Icon {...outlinedMaterialIconProps} name={"done-outline"} />
          <Icon {...outlinedMaterialIconProps} name={"assignment-ind"} />
          <Icon {...outlinedMaterialIconProps} name={"dns"} />
          <Icon {...outlinedMaterialIconProps} name={"source"} />
          <Icon {...outlinedMaterialIconProps} name={"dangerous"} />
          <Icon {...outlinedMaterialIconProps} name={"lock-open"} />
          <Icon {...outlinedMaterialIconProps} name={"disabled-by-default"} />
          <Icon {...outlinedMaterialIconProps} name={"edit-off"} />
          <Icon {...outlinedMaterialIconProps} name={"lightbulb-outline"} />
          <Icon {...outlinedMaterialIconProps} name={"lightbulb-circle"} />
          <Icon {...outlinedMaterialIconProps} name={"install-mobile"} />
          <Icon {...outlinedMaterialIconProps} name={"fullscreen"} />
          <Icon {...outlinedMaterialIconProps} name={"notifications"} />
          <Icon {...outlinedMaterialIconProps} name={"cake"} />
          <Icon {...outlinedMaterialIconProps} name={"thunderstorm"} />
          <Icon {...outlinedMaterialIconProps} name={"image"} />
          <Icon {...outlinedMaterialIconProps} name={"timer"} />
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text variant={"titleLarge"}>Material - round</Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
          <Icon {...roundMaterialIconProps} name={"thumb-up"} />
          <Icon {...roundMaterialIconProps} name={"visibility-off"} />
          <Icon {...roundMaterialIconProps} name={"fingerprint"} />
          <Icon {...roundMaterialIconProps} name={"bookmark-border"} />
          <Icon {...roundMaterialIconProps} name={"done-outline"} />
          <Icon {...roundMaterialIconProps} name={"assignment-ind"} />
          <Icon {...roundMaterialIconProps} name={"dns"} />
          <Icon {...roundMaterialIconProps} name={"source"} />
          <Icon {...roundMaterialIconProps} name={"dangerous"} />
          <Icon {...roundMaterialIconProps} name={"lock-open"} />
          <Icon {...roundMaterialIconProps} name={"disabled-by-default"} />
          <Icon {...roundMaterialIconProps} name={"edit-off"} />
          <Icon {...roundMaterialIconProps} name={"lightbulb-outline"} />
          <Icon {...roundMaterialIconProps} name={"lightbulb-circle"} />
          <Icon {...roundMaterialIconProps} name={"install-mobile"} />
          <Icon {...roundMaterialIconProps} name={"fullscreen"} />
          <Icon {...roundMaterialIconProps} name={"notifications"} />
          <Icon {...roundMaterialIconProps} name={"cake"} />
          <Icon {...roundMaterialIconProps} name={"thunderstorm"} />
          <Icon {...roundMaterialIconProps} name={"image"} />
          <Icon {...roundMaterialIconProps} name={"timer"} />
        </View>
      </View>

      <View style={{ gap: 8 }}>
        <Text variant={"titleLarge"}>Material - sharp</Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
          <Icon {...sharpMaterialIconProps} name={"thumb-up"} />
          <Icon {...sharpMaterialIconProps} name={"visibility-off"} />
          <Icon {...sharpMaterialIconProps} name={"fingerprint"} />
          <Icon {...sharpMaterialIconProps} name={"bookmark-border"} />
          <Icon {...sharpMaterialIconProps} name={"done-outline"} />
          <Icon {...sharpMaterialIconProps} name={"assignment-ind"} />
          <Icon {...sharpMaterialIconProps} name={"dns"} />
          <Icon {...sharpMaterialIconProps} name={"source"} />
          <Icon {...sharpMaterialIconProps} name={"dangerous"} />
          <Icon {...sharpMaterialIconProps} name={"lock-open"} />
          <Icon {...sharpMaterialIconProps} name={"disabled-by-default"} />
          <Icon {...sharpMaterialIconProps} name={"edit-off"} />
          <Icon {...sharpMaterialIconProps} name={"lightbulb-outline"} />
          <Icon {...sharpMaterialIconProps} name={"lightbulb-circle"} />
          <Icon {...sharpMaterialIconProps} name={"install-mobile"} />
          <Icon {...sharpMaterialIconProps} name={"fullscreen"} />
          <Icon {...sharpMaterialIconProps} name={"notifications"} />
          <Icon {...sharpMaterialIconProps} name={"cake"} />
          <Icon {...sharpMaterialIconProps} name={"thunderstorm"} />
          <Icon {...sharpMaterialIconProps} name={"image"} />
          <Icon {...sharpMaterialIconProps} name={"timer"} />
        </View>
      </View>
    </ScrollView>
  )
}
