import { View } from "react-native"
import { Button } from "react-native-paper"
import { LoadingModal, useModal } from "react-native-paper-towel"


export function LoadingModalScreen() {


    const loading = useModal()


    function showModal() {
        loading.show()

        setTimeout(loading.hide, 3000)
    }


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                mode={"contained"}
                children={"Show LoadingModal"}
                onPress={showModal}
            />

            <LoadingModal
                visible={loading.isVisible}
                message={"Loading..."}
            />
        </View>
    )
}
