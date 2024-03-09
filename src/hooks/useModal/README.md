# useModal

Hook to abstract the modal's visibility state.

## Usage

```ts
import { View } from "react-native"
import { Button } from "react-native-paper"
import { LoadingModal, useModal } from "react-native-paper-towel"


export function App() {


    const loading = useModal()


    function runAction() {
        loading.show()

        try {
            // ...
        } catch (error) {
            // ...
        } finally {
            loading.hide()
        }
    }


    return (
        <View>
            <Button
                mode={"contained"}
                children={"Run action"}
                onPress={runAction}
            />

            <LoadingModal
                visible={loading.isVisible}
                message={"Loading..."}
            />
        </View>
    )
}
```

## Docs

### useModal hook

```ts
function useModal(isVisible: boolean = false): UseModal
```

The hook that controls the modal visibility. It receives the initial value
of `isVisible` property, which is `false` by default. The return object
is of type [`UseModal`](#usemodal-type).

### UseModal type

The type of object returned by [`useModal`](#usemodal-hook) hook. Its
properties are:

- `isVisible`

    ```ts
    isVisible: boolean
    ```

    Boolean value that indicates whether the modal is visible or not.

- `show`

    ```ts
    show: () => void
    ```

    Function to show the modal.

- `hide`

    ```ts
    show: () => void
    ```

    Function to hide the modal.
