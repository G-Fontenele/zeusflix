import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button/index';

import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';



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
        // alert('Vídeo Cadastrado com sucesso!');
      }}>
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

        <Button type='submit'>
          Cadastrar
        </Button>
      </form>

      <Link to = '/register/category'>
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default VideoRegister;
