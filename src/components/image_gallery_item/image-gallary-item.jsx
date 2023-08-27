import { GalleryItem, Img } from "./style_image_gallery_item"

export const ImageGalleryItem = ({image }) => {
    return (
        <GalleryItem >
  <Img src={image.webformatURL} alt={image.tags} />
</GalleryItem>
    )
}