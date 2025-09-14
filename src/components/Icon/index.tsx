import { IconProps as VectorIconProps } from "@react-native-vector-icons/common"
import {
  MaterialDesignIcons,
  MaterialDesignIconsIconName,
} from "@react-native-vector-icons/material-design-icons"


export type IconNames = MaterialDesignIconsIconName


export type IconProps<N extends IconNames = IconNames> = VectorIconProps<N>


export function Icon<N extends IconNames = IconNames>(props: IconProps<N>) {


  const defaultSize = 24


  return (
    <MaterialDesignIcons
      size={defaultSize}
      {...props}
    />
  )
}
