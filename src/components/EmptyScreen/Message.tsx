import { useMemo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import type { StyleProp, TextStyle } from 'react-native'
import type { TextProps } from 'react-native-paper'
import { Text } from 'react-native-paper'


export interface EmptyScreenMessageProps extends TextProps<'bodyLarge'> {}


export function EmptyScreenMessage(props: EmptyScreenMessageProps) {


  const { colors } = useMaterialTheme()


  const style = useMemo<StyleProp<TextStyle>>(() => {
    const textStyle: TextStyle = {
      color: colors.onBackground,
      maxWidth: 256,
      textAlignVertical: 'center',
      textAlign: 'center',
    }

    return [textStyle, props.style]
  }, [colors.onBackground, props.style])


  return (
    <Text
      variant={'bodyLarge'}
      {...props}
      style={style}
    />
  )
}
