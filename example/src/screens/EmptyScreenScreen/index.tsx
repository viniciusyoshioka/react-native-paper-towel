import { View } from "react-native"
import { EmptyScreen } from "react-native-paper-towel"


export function EmptyScreenScreen() {
    return (
        <View style={{ flex: 1 }}>
            <EmptyScreen.Content>
                <EmptyScreen.Icon
                    name={"report-problem"}
                    group={"material"}
                    size={64}
                    outlined
                />

                <EmptyScreen.Message>
                    Example of EmptyScreen with Icon
                </EmptyScreen.Message>
            </EmptyScreen.Content>
        </View>
    )
}
