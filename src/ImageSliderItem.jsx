import React from 'react';

function ImageSliderItem(props) {
  const { src } = props;
  return (
    <li>
    <p>This is image</p>
    <img alt="" src={src} />
    </li>
  );
}

export default ImageSliderItem;
