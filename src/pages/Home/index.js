import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

import ColoredCircularProgress from '../../components/Progress/ColoredCircularProgress/index';
import ColoredLinearProgress from '../../components/Progress/ColoredLinearProgress/index';


function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}



function Home() {
  const [initData, setInitData] = useState([]);

  let m = getRandomArbitrary(0,initData.length);


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
    <PageDefault to='/register/video' text='Novo Vídeo' paddingAll={0}>

      {initData.length === 0 && <div>
        <ColoredCircularProgress />
        <div style={{padding: 250}} />
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
