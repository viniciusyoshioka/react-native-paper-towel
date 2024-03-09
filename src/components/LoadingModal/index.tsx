import { useMaterialTheme } from "react-material-design-provider"
import { ActivityIndicator, TextStyle, ViewStyle } from "react-native"
import { Dialog, Portal, Text } from "react-native-paper"


export interface LoadingModalProps {
    visible: boolean
    message: string
}


export function LoadingModal(props: LoadingModalProps) {


    const { colors } = useMaterialTheme()


    const contentStyle: ViewStyle = {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 16,
    }

    const messageStyle: TextStyle = {
        flex: 1,
        color: colors.onSurface,
    }


    return (
        <Portal>
            <Dialog visible={props.visible} dismissable={false}>
                <Dialog.Content style={contentStyle}>
                    <ActivityIndicator
                        size={"large"}
                        color={colors.onSurface}
                    />

                    <Text
                        variant={"bodyLarge"}
                        style={messageStyle}
                        children={props.message}
                    />
                </Dialog.Content>
            </Dialog>
        </Portal>
    )
}
