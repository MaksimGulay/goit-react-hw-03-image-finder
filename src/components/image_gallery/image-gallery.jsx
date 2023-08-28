import { ImageGalleryItem } from "components/image_gallery_item/image-gallary-item";
import { GaleryContainer, GalleryList } from "./style_image_gallery";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <GaleryContainer>
      <GalleryList>{images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}</GalleryList>
      
    </GaleryContainer>
  );
};



