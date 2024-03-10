import { forwardRef } from "react"
import { useMaterialTheme } from "react-material-design-provider"
import { TextInput as RNTextInput, TextStyle } from "react-native"
import { TextInput, TextInputProps } from "react-native-paper"


export interface InputProps extends TextInputProps {}


export const Input = forwardRef<RNTextInput, InputProps>((props, ref) => {


    const { colors } = useMaterialTheme()


    const inputStyle: TextStyle = {
        backgroundColor: colors.surfaceContainerHighest,
    }


    return (
        <TextInput
            ref={ref}
            mode={"outlined"}
            dense={true}
            outlineColor={"transparent"}
            selectionColor={colors.primaryContainer}
            cursorColor={colors.primary}
            {...props}
            style={[inputStyle, props.style]}
        />
    )
})
