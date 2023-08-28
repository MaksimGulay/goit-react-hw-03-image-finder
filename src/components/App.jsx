import React, {Component} from 'react';
import { Searchbar } from './searchbar/searchbar';
import { ImageGallery } from './image_gallery/image-gallery';
import { Button } from './button/button';
import { Loader } from './loader/loader';
import { Modal } from './modal/modal'
import { getImages } from './data';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalImageSrc: '',
    modalImageAlt: '',
  };

  openModal = (imageSrc, imageAlt) => {
    this.setState({
      showModal: true,
      modalImageSrc: imageSrc,
      modalImageAlt: imageAlt,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImageSrc: '',
      modalImageAlt: '',
    });
  };


  changeQuery = (newQuery) => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    })
  };

  async componentDidMount() {
    // const { query, page } = this.state;
    // const images = await getImages(query, page);
    // this.setState({ images });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ loading: true });
      const slashIndex = this.state.query.indexOf('/');
      const queryWithoutReqId = this.state.query.substring(slashIndex + 1); 
      console.log(`Http запрос за ${queryWithoutReqId}, і ${this.state.page}`);
      const newImages = await getImages({ query: queryWithoutReqId, page: this.state.page });
      this.setState((prevState) => ({ loading: false, images: [...prevState.images, ...newImages] }));
    }
  }

  handleLoadMore = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
   
  }


  render() {
    const { loading, images, showModal, modalImageSrc, modalImageAlt} = this.state;
    const hasMoreImages = images.length > 11;
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery}/>
        <ImageGallery images={images} openModal={this.openModal}/>
        {hasMoreImages && <Button handleLoadMore={this.handleLoadMore}/>}
        {loading && <Loader />}
        {showModal && (
          <Modal imageSrc={modalImageSrc} altText={modalImageAlt} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
