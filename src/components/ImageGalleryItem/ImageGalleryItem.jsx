import { Component } from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleImageClick = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <Item>
        <ItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.handleImageClick}
        />
        {showModal && (
          <Modal
            largeImg={largeImageURL}
            onClose={this.handleModalClose}
            tags={tags}
          />
        )}
      </Item>
    );
  }
}
