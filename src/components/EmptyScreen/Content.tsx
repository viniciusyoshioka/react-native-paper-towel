import type { ViewProps, ViewStyle } from 'react-native'
import { View } from 'react-native'


export interface EmptyScreenContentProps extends ViewProps {
  visible?: boolean
}


export function EmptyScreenContent(props: EmptyScreenContentProps) {


  if (props.visible !== true) return null


  return (
    <View
      {...props}
      style={[emptyScreenContentStyle, props.style]}
    />
  )
}


const emptyScreenContentStyle: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
}
