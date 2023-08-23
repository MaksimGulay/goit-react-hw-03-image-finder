import { ImageGalleryItem } from "components/image_gallery_item/image-gallary-item";

export const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};
