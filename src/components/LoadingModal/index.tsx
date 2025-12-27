import { useMemo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import type { TextStyle, ViewStyle } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { Dialog, Portal, Text } from 'react-native-paper'


export interface LoadingModalProps {
  visible: boolean
  message: string
}


export function LoadingModal(props: LoadingModalProps) {


  const { colors } = useMaterialTheme()


  const contentStyle = useMemo<ViewStyle>(() => {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 16,
    }
  }, [])

  const messageStyle = useMemo<TextStyle>(() => {
    return {
      flex: 1,
      color: colors.onSurface,
    }
  }, [colors.onSurface])


  return (
    <Portal>
      <Dialog visible={props.visible} dismissable={false}>
        <Dialog.Content style={contentStyle}>
          <ActivityIndicator
            size={'large'}
            color={colors.onSurface}
          />

          <Text
            variant={'bodyLarge'}
            style={messageStyle}
            children={props.message}
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  )
}
