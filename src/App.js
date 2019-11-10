import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';
import data from './data/data';

function App() {
  return (
    <div>
      <ImageSlider images={["winter"]}/>
    </div>
  );
}

export default App;
