import { View } from "react-native"
import { EmptyScreen } from "react-native-paper-towel"


export function EmptyScreenScreen() {
    return (
        <View style={{ flex: 1 }}>
            <EmptyScreen.Content visible={true}>
                <EmptyScreen.Icon
                    name={"report-problem"}
                    group={"material"}
                    size={64}
                    outlined
                />

                <EmptyScreen.Message>
                    Example of EmptyScreen with Icon that is visible
                </EmptyScreen.Message>
            </EmptyScreen.Content>

            <EmptyScreen.Content visible={false}>
                <EmptyScreen.Icon
                    name={"report-problem"}
                    group={"material"}
                    size={64}
                    outlined
                />

                <EmptyScreen.Message>
                    Example of EmptyScreen with Icon that is not visible
                </EmptyScreen.Message>
            </EmptyScreen.Content>
        </View>
    )
}
