import { useMemo } from 'react'
import { useMaterialTheme } from 'react-material-design-provider'
import type { ImageProps, ImageStyle, StyleProp } from 'react-native'
import { Image } from 'react-native'


export interface EmptyScreenImageProps extends ImageProps {}


export function EmptyScreenImage(props: EmptyScreenImageProps) {


  const { colors } = useMaterialTheme()


  const style = useMemo<StyleProp<ImageStyle>>(() => {
    const imageStyle: ImageStyle = {
      width: 96,
      height: 96,
    }

    return [imageStyle, props.style]
  }, [props.style])


  return (
    <Image
      tintColor={props.tintColor ?? colors.onBackground}
      {...props}
      style={style}
    />
  )
}
