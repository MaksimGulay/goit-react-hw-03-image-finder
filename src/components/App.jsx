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


  // async componentDidUpdate(prevProps, prevState) {
  //   if(prevState.query !== this.state.query || prevState.page !== this.state.page) {
  //     console.log(`Http запрос за ${this.state.query}, і ${this.state.page}`)
  //     const { query, page } = this.state;
  //     const newImages = await getImages({ query, page });
  //     this.setState((prevState) => ({ images: [...prevState.images, ...newImages] }));
  //     // не забути відрізати Req-id  від query
  //     // HTTP запрос за query 
  //     // thit.setSate({images: результат запроса})
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const slashIndex = this.state.query.indexOf('/');
      const queryWithoutReqId = this.state.query.substring(slashIndex + 1); 
      console.log(`Http запрос за ${queryWithoutReqId}, і ${this.state.page}`);
      const newImages = await getImages({ query: queryWithoutReqId, page: this.state.page });
      this.setState((prevState) => ({ images: [...prevState.images, ...newImages] }));
    }
  }

  handleLoadMore = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
   
  }


  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery}/>
        <ImageGallery images={this.state.images}/>
        <Button handleLoadMore={this.handleLoadMore}/>
        <Loader />
        <Modal />
      </div>
    );
  }
}
