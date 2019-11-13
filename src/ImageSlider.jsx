import React from 'react';
import ImageSliderItem from './ImageSliderItem';

function ImageSlider(props) {
  const { images } = props;
  const frames = images.map(function(image, i){
    return <ImageSliderItem key={i} src={image}/>
  });
  return (
    <div>
      <h1>Here are a bunch of great photos</h1>
        <div className="slider">
          <img className="slider_arrow slider_arrow--previous" alt="show previous" src="./images/previous-arrow.png" />
          <ul className="slider_list">
            {frames}
          </ul>
          <img className="slider_arrow slider_arrow--next" alt="show next" src="./images/next-arrow.png" />
      </div>
    </div>
  );
}

export default ImageSlider;


// props {
//   name: "Noelle"
// }
