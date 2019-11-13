import React from 'react';

function ImageSliderItem(props) {
  const { src } = props;
  return (
    <li className="slider_list_item">
    <img alt="" src={src} />
    </li>
  );
}

export default ImageSliderItem;
