import React from 'react';
import Header from './components/layouts/Header.tsx';
import Menu from './components/layouts/Menu.tsx';
import SlideShow from './components/layouts/SlideShow.tsx';
import UnitedListView from './views/unitedListView.tsx';
import InstagramView from './views/InstagramView.tsx';

import mainImage1 from './assets/mainImage1.png';
import mainImage2 from './assets/mainImage2.jpeg';
import mainImage3 from './assets/mainImage3.jpeg';
import mainImage4 from './assets/mainImage4.jpeg';

function App() {
  const slideImages = [mainImage1, mainImage2, mainImage3, mainImage4]; 

  return (
    <div className="App">
      <Header title="My App" />
      <Menu />
      <SlideShow images={slideImages} />
      <UnitedListView />
      <InstagramView />
    </div>
  );
}

export default App;
