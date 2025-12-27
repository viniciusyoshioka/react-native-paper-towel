import { useMemo } from 'react'
import type {
  PressableAndroidRippleConfig,
  PressableStateCallbackType,
  PressableProps as RNPressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native'
import {
  Pressable as RNPressble,
  StyleSheet,
  View,
} from 'react-native'


type PressableStyleProp = StyleProp<ViewStyle>
  | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)
  | undefined

type AnyStyle = {
  [key: string]: unknown
}

interface ProcessedStyle {
  viewStyle: ViewStyle
  pressableStyle: ViewStyle
}


function processStyle(style: PressableStyleProp): ProcessedStyle {
  const viewStyle: AnyStyle = {}
  const pressableStyle: AnyStyle = {}
  let styleObject: AnyStyle = {}

  if (style === undefined) return { viewStyle, pressableStyle }

  if (typeof style === 'function') {
    style = style({ pressed: false })
  }
  if (typeof style === 'object') {
    styleObject = StyleSheet.flatten(style) as AnyStyle
  }

  const keys = Object.keys(styleObject)
  keys.forEach(key => {
    const includesPadding = key.toLowerCase().includes('padding')
    const includesMargin = key.toLowerCase().includes('margin')
    const includesBorder = key.toLowerCase().includes('border')
    const value = styleObject[key]

    if (includesPadding) {
      pressableStyle[key] = value
    } else if (includesMargin || includesBorder) {
      viewStyle[key] = value
    } else {
      viewStyle[key] = value
      pressableStyle[key] = value
    }
  })

  return { viewStyle, pressableStyle }
}


export interface PressableProps extends RNPressableProps {}


export function Pressable(props: PressableProps) {


  const processedStyle = useMemo<ProcessedStyle>(() => {
    return processStyle(props.style)
  }, [props.style])

  const wrapperStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return [processedStyle.viewStyle, { overflow: 'hidden' }]
  }, [processedStyle.viewStyle])

  const androidRippleStyle = useMemo<PressableAndroidRippleConfig>(() => {
    return { color: 'white' }
  }, [])


  return (
    <View style={wrapperStyle}>
      <RNPressble
        android_ripple={androidRippleStyle}
        {...props}
        style={processedStyle.pressableStyle}
      />
    </View>
  )
}
