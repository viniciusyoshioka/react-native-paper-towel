import { forwardRef, useMemo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import type { TextInput as RNTextInput, StyleProp, TextStyle } from 'react-native'
import type { TextInputProps } from 'react-native-paper'
import { TextInput } from 'react-native-paper'


export interface InputProps extends TextInputProps {}


export const Input = forwardRef<RNTextInput, InputProps>((props, ref) => {


  const { colors } = useMaterialTheme()


  const style = useMemo<StyleProp<TextStyle>>(() => {
    const inputStyle: TextStyle = {
      backgroundColor: colors.surfaceContainerHighest,
    }

    return [inputStyle, props.style]
  }, [colors.surfaceContainerHighest, props.style])


  return (
    <TextInput
      ref={ref}
      mode={'outlined'}
      dense={true}
      outlineColor={'transparent'}
      selectionColor={colors.primaryContainer}
      cursorColor={colors.primary}
      {...props}
      style={style}
    />
  )
})
