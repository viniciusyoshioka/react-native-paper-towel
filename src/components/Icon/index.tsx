import type { IconProps as VectorIconProps } from '@react-native-vector-icons/common'
import type { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons'


export type IconNames = MaterialDesignIconsIconName


export type IconProps<N extends IconNames = IconNames> = VectorIconProps<N>


export function Icon<N extends IconNames = IconNames>(
  props: IconProps<N>,
): React.JSX.Element {


  const defaultSize = 24


  return (
    <MaterialDesignIcons
      size={defaultSize}
      {...props}
    />
  )
}
