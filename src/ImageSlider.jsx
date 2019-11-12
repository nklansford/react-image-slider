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
      <ul>
      {frames}
    </ul>
    </div>
  );
}

export default ImageSlider;


// props {
//   name: "Noelle"
// }
