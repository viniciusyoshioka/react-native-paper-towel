import { useMemo } from 'react'
import type { StyleProp, ViewProps, ViewStyle } from 'react-native'
import { View } from 'react-native'


export interface EmptyScreenContentProps extends ViewProps {
  visible?: boolean
}


export function EmptyScreenContent(props: EmptyScreenContentProps) {


  const style = useMemo<StyleProp<ViewStyle>>(() => {
    return [
      emptyScreenContentStyle,
      props.style,
    ]
  }, [props.style])


  if (props.visible !== true) return null


  return (
    <View
      {...props}
      style={style}
    />
  )
}


const emptyScreenContentStyle: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
}
