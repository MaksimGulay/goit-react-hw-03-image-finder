import { GalleryItem, Img } from "./style_image_gallery_item"

export const ImageGalleryItem = ({image, openModal}) => {
    return (
        <GalleryItem >
  <Img src={image.webformatURL} 
  alt={image.tags} 
  onClick={() => openModal(image.largeImageURL, image.tags)}/>
</GalleryItem>
    )
}


