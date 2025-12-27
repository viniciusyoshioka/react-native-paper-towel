import { forwardRef, useMemo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import type { StyleProp, TextInputProps, TextStyle } from 'react-native'
import { TextInput } from 'react-native'


export interface InputHeaderProps extends TextInputProps {}


export const InputHeader = forwardRef<TextInput, InputHeaderProps>((props, ref) => {


  const { colors, typography } = useMaterialTheme()


  const style = useMemo<StyleProp<TextStyle>>(() => {
    const inputStyle: TextStyle = {
      flex: 1,
      padding: 0,
      color: colors.onSurface,
      ...typography.title.large,
    }

    return [inputStyle, props.style]
  }, [colors.onSurface, typography.title.large, props.style])


  return (
    <TextInput
      ref={ref}
      blurOnSubmit={false}
      placeholderTextColor={colors.onSurfaceVariant}
      selectionColor={colors.primaryContainer}
      cursorColor={colors.primary}
      selectTextOnFocus={true}
      {...props}
      style={style}
    />
  )
})
