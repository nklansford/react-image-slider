import React from 'react';
import ImageSliderItem from './ImageSliderItem';

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
    // const frames = images.map(function(image, i){
    //   return <ImageSliderItem key={i} src={image}/>
    // });
    const currentImage = images[currentIndex];
    return (
      <div>
        <h1>Let it snow, let it snow</h1>
          <div className="slider">
            <img onClick={this.indexBackward} className="slider_arrow slider_arrow--previous" alt="show previous" src="./images/previous-arrow.png" />
            <ul className="slider_list">
              <ImageSliderItem src={currentImage} />
            </ul>
            <img onClick={this.indexForward} className="slider_arrow slider_arrow--next" alt="show next" src="./images/next-arrow.png" />
        </div>
      </div>
    );
  }
}

export default ImageSlider;


// props {
//   name: "Noelle"
// }
