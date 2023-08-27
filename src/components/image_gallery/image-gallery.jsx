import { ImageGalleryItem } from "components/image_gallery_item/image-gallary-item";
import { GalleryList } from "./style_image_gallery";

export const ImageGallery = ({ images }) => {
  return (
    <div >
      <GalleryList>{images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}</GalleryList>
      
    </div>
  );
};
