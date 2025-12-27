import { useMaterialTheme } from 'react-material-design-provider'
import type { ImageProps, ImageStyle } from 'react-native'
import { Image } from 'react-native'


export interface EmptyScreenImageProps extends ImageProps {}


export function EmptyScreenImage(props: EmptyScreenImageProps) {


  const { colors } = useMaterialTheme()


  const imageStyle: ImageStyle = {
    width: 96,
    height: 96,
  }


  return (
    <Image
      tintColor={props.tintColor ?? colors.onBackground}
      {...props}
      style={[imageStyle, props.style]}
    />
  )
}
