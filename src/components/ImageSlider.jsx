import React from 'react';
import './ImageSlider.css';

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    }
  }

  indexForward = () => {
    const length = this.props.images.length;
    if(this.state.currentIndex < length - 1){
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    } else {
      this.setState({
        currentIndex: 0
      });
    }
  }

  indexBackward = () => {
    const length = this.props.images.length;
    if(this.state.currentIndex > 0){
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    } else {
      this.setState({
        currentIndex: length - 1
      });
    }
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];
    return (
      <div className="image-slider">
        <img onClick={this.indexBackward} className="image-slider__arrow" alt="show previous" src="./images/icons/previous-arrow.png" />
        <img className="image-slider__image" alt="" src={currentImage} />
        <img onClick={this.indexForward} className="image-slider__arrow" alt="show next" src="./images/icons/next-arrow.png" />
      </div>
    );
  }
}

export default ImageSlider;
