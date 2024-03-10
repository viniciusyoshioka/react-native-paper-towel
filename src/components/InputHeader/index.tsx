import { forwardRef } from "react"
import { useMaterialTheme } from "react-material-design-provider"
import { TextInput, TextInputProps, TextStyle } from "react-native"


export interface InputHeaderProps extends TextInputProps {}


export const InputHeader = forwardRef<TextInput, InputHeaderProps>((props, ref) => {


    const { colors, typography } = useMaterialTheme()


    const inputStyle: TextStyle = {
        flex: 1,
        padding: 0,
        color: colors.onSurface,
        ...typography.title.large,
    }


    return (
        <TextInput
            ref={ref}
            blurOnSubmit={false}
            placeholderTextColor={colors.onSurfaceVariant}
            selectionColor={colors.primaryContainer}
            cursorColor={colors.primary}
            selectTextOnFocus={true}
            {...props}
            style={[inputStyle, props.style]}
        />
    )
})
