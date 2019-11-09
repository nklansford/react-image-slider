import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';
import Bork from './images/bork.png';

function App() {
  return (
    <div>
      <ImageSlider images={[Bork]}/>
    </div>
  );
}

export default App;
