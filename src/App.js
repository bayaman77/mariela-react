import React from 'react';
import Content1 from './components/contents/Content1';
import Content2 from './components/contents/Content2';
import Content3 from './components/contents/Content3';
import Content4 from './components/contents/Content4';
import MorePhotos from './components/contents/MorePhotos';
import Footer from './components/Footer/Footer';
import MainFooter from './components/Footer/MainFooter';
import Header from './components/header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Content4/>
      <MorePhotos/>
      <MainFooter/>
      <Footer/>
    </div>
  );
};

export default App;