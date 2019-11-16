import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';
import data from '../data/images';

function App() {
  return (
    <>
      <h1 className="app-title">Let it snow, let it snow</h1>
      <ImageSlider images={data}/>
    </>
  );
}

export default App;
