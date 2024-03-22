import Color from "color"
import { useMaterialTheme } from "react-material-design-provider"
import { Pressable as RNPressable, ScrollView, TextStyle, ViewStyle } from "react-native"
import { Text } from "react-native-paper"
import { Pressable } from "react-native-paper-towel"


export function PressableScreen() {


  const { colors, shape, state } = useMaterialTheme()


  const contentContainer: ViewStyle = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  }

  const pressableStyle: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: shape.full,
    backgroundColor: colors.primary,
  }

  const textStyle: TextStyle = {
    color: colors.onPrimary,
  }

  const ripple = Color("#000").alpha(state.press)
    .rgb()
    .toString()


  return (
    <ScrollView contentContainerStyle={contentContainer}>
      <RNPressable style={pressableStyle} android_ripple={{ color: ripple }}>
        <Text variant={"bodyLarge"} style={textStyle}>
          React Native's Pressable
        </Text>
      </RNPressable>

      <Pressable style={pressableStyle} android_ripple={{ color: ripple }}>
        <Text variant={"bodyLarge"} style={textStyle}>
          React Native Paper Towel's Pressable
        </Text>
      </Pressable>
    </ScrollView>
  )
}
