import { forwardRef, useState } from "react"
import { KeyboardTypeOptions, TextInput as RNTextInput } from "react-native"
import { TextInput } from "react-native-paper"

import { Input, InputProps } from "../Input"


export interface InputPasswordProps extends InputProps {}


export const InputPassword = forwardRef<RNTextInput, InputPasswordProps>((props, ref) => {


  const [hidePassword, setHidePassword] = useState(true)

  const isPasswordHidden: boolean = props.secureTextEntry === undefined
    ? hidePassword
    : props.secureTextEntry
  const keyboardType: KeyboardTypeOptions = props.keyboardType === undefined
    ? isPasswordHidden ? "default" : "visible-password"
    : props.keyboardType


  function right() {
    return (
      <TextInput.Icon
        icon={isPasswordHidden ? "eye-off" : "eye"}
        onPress={() => setHidePassword(!isPasswordHidden)}
        forceTextInputFocus={false}
      />
    )
  }


  return (
    <Input
      ref={ref}
      autoCapitalize={"none"}
      autoComplete={"new-password"}
      autoCorrect={false}
      right={props.right === undefined ? right() : props.right}
      {...props}
      secureTextEntry={isPasswordHidden}
      keyboardType={keyboardType}
    />
  )
})
