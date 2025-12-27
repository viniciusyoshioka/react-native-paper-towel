import { forwardRef, useCallback, useMemo, useState } from 'react'
import type { KeyboardTypeOptions, TextInput as RNTextInput } from 'react-native'
import { TextInput } from 'react-native-paper'

import type { InputProps } from '../Input/index.tsx'
import { Input } from '../Input/index.tsx'


export interface InputPasswordProps extends InputProps {}


export const InputPassword = forwardRef<RNTextInput, InputPasswordProps>((props, ref) => {


  const [hidePassword, setHidePassword] = useState(true)

  const isPasswordHidden: boolean = props.secureTextEntry === undefined
    ? hidePassword
    : props.secureTextEntry
  const keyboardType: KeyboardTypeOptions = props.keyboardType === undefined
    ? isPasswordHidden ? 'default' : 'visible-password'
    : props.keyboardType


  const toggleHidePassword = useCallback(() => {
    setHidePassword(!isPasswordHidden)
  }, [isPasswordHidden])

  const right = useMemo(() => {
    if (props.right) {
      return props.right
    }

    return (
      <TextInput.Icon
        icon={isPasswordHidden ? 'eye-off' : 'eye'}
        onPress={toggleHidePassword}
        forceTextInputFocus={false}
      />
    )
  }, [props.right, isPasswordHidden, toggleHidePassword])


  return (
    <Input
      ref={ref}
      autoCapitalize={'none'}
      autoComplete={'new-password'}
      autoCorrect={false}
      right={right}
      {...props}
      secureTextEntry={isPasswordHidden}
      keyboardType={keyboardType}
    />
  )
})
