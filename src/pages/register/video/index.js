import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/index';

import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import VideoPreview from '../../../components/VideoPreview';

import ButtonRegister from '../../../components/Button/ButtonRegister/index'

function VideoRegister() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  const categoryTitles = categories.map(({ title }) => title);
  
  const { handler, values } = useForm({
    title: '',
    url: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  function urlIsValid(url) {
    if (url.match('youtube.com')){
      return (true);
    }
    return(false);
  };

  return(
    <PageDefault>
      <h1>Cadastro de Vídeo: {values.title}</h1>
      <form onSubmit = {(event) => {
        event.preventDefault();

        const categoryChoice = categories.find((category) => {
          return category.title === values.category;
        });

        videosRepository.create({
          title: values.title,
          url: values.url,
          description: values.description,
          categoryId: categoryChoice.id,
        })
        .then(() => {
          console.log('Vídeo cadastrado com sucesso!');
          console.log(categories);
          history.push('/');
        });
        alert('Vídeo Cadastrado com sucesso!');
      }}>

        {urlIsValid(values.url) && (      
          <VideoPreview 
            videoTitle={values.title || ''}
            videoURL={values.url}
          />
        )}
        
        <div style={{padding: 20}}/>

        <FormField
          label='Título do Vídeo'
          name='title'
          value={values.title}
          onChange={handler}
        />

        <FormField
          label='URL'
          name='url'
          value={values.url}
          onChange={handler}
        />



        <FormField
          label='Descrição do Vídeo'
          type="textarea"
          name='description'
          value={values.description}
          onChange={handler}
        />

        <FormField
          label='Categoria do Vídeo'
          name='category'
          value={values.category}
          onChange={handler}
          suggestions={categoryTitles}
        />


        <ButtonRegister type='submit'>
          Cadastrar
        </ButtonRegister>
      </form>

      <div style={{paddingTop: 20, paddingBottom: 30}}>
        <Link style={{fontWeight: 'bold'}} to = '/register/category'>
          Cadastrar Categoria
        </Link>
      </div>
    </PageDefault>
  )
}

export default VideoRegister;
