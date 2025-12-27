import { useMaterialTheme } from 'react-material-design-provider'
import type { TextStyle } from 'react-native'
import type { TextProps } from 'react-native-paper'
import { Text } from 'react-native-paper'


export interface EmptyScreenMessageProps extends TextProps<'bodyLarge'> {}


export function EmptyScreenMessage(props: EmptyScreenMessageProps) {


  const { colors } = useMaterialTheme()


  const textStyle: TextStyle = {
    color: colors.onBackground,
    maxWidth: 256,
    textAlignVertical: 'center',
    textAlign: 'center',
  }


  return (
    <Text
      variant={'bodyLarge'}
      {...props}
      style={[textStyle, props.style]}
    />
  )
}
