import React from 'react';
import Menu from '../../components/Menu';
import initData from '../../data/initData.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={initData.categories[0].videos[0].title}
        url={initData.categories[0].videos[0].url}
        videoDescription={initData.categories[0].videos[0].description}
      />

      <Carousel
        ignoreFirstVideo
        category={initData.categories[0]}
      />

      <Carousel
        category={initData.categories[1]}
      />

      <Carousel
        category={initData.categories[2]}
      />      

      <Carousel
        category={initData.categories[3]}
      />      

      <Carousel
        category={initData.categories[4]}
      />      

      <Carousel
        category={initData.categories[5]}
        style = {{marginBottom: 50}}
      />      

      <Footer />
    </div>
  );
}

export default Home;
