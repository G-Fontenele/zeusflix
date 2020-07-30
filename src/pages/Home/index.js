import React from 'react';
import Menu from '../../components/Menu';
import initData from '../../data/initData.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

let i = 6;
/*
let count = 0;
function videoNumber(){
  count = count + 1;
  if (count>10000){
    count = 0;
    if (i>6){
      i = 0;
    }
    i = i + 1;
    return i
  }
}
*/

function Home() {
  return (    
    <div style={{ background: "#141414" }}>
      <Menu />

    
      <BannerMain
        videoTitle={initData.categories[i].videos[0].title}
        url={initData.categories[i].videos[0].url}
        videoDescription={initData.categories[i].videos[0].description}
      />

      <Carousel
        //ignoreFirstVideo
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
      />      

      <Carousel
        category={initData.categories[6]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
