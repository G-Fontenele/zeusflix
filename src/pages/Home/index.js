import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

import { LinearProgress } from '@material-ui/core';


function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}



function Home() {
  const [initData, setInitData] = useState([]);

  let m = getRandomArbitrary(0,initData.length);
  m = 1;


  useEffect(() => {
    categoriesRepository.getAllWithVideos()
    .then((categoriesWithVideos) => {
      setInitData(categoriesWithVideos);
     })
    .catch((error) => {
      console.log(error.message);
    })
  }, []);

  return (    
    <PageDefault paddingAll={0}>
      <Menu />

      {initData.length === 0 && <div>
        <div style={{padding: 150}}>
              <LinearProgress/>
          </div>
          </div>}


      {initData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initData[m].videos[0].title}
                url={initData[m].videos[0].url}
                videoDescription={initData[m].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
