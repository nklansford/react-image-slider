import React from 'react';

function ImageSlider(props) {
  const { images } = props;
  return (
    <div>
      <img alt="a happy bork" src={images} />
    </div>
  );
}

export default ImageSlider;


// props {
//   name: "Noelle"
// }
