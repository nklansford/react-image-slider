import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';
import data from './data';

function App() {
  return (
    <ImageSlider images={data}/>
  );
}

export default App;
