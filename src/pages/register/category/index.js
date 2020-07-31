import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import { LinearProgress } from '@material-ui/core';

import categoriesRepository from '../../../repositories/categories';

function CategoryRegister() {
  const initValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handler, values, clearForm }= useForm(initValues);

  const [categories, setCategories] = useState([]);



  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8000/categories'
        : 'https://zeusflix.herokuapp.com/categories'; 

      fetch(URL)
       .then(async (serverFeedback) =>{
        if(serverFeedback.ok) {
          const feedback = await serverFeedback.json();
          setCategories([
            ...feedback,
          ]);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.name}
      </h1>

      <form
        style={{ background: values.color }}
        onSubmit={(event) => {
          event.preventDefault();
          categoriesRepository.create({
            title: values.title,
            url: values.url,
            description: values.description,
          })
          .then(() => {
            console.log('Categoria cadastrado com sucesso!');
            console.log(categories);
            clearForm();
          });
        }}>

        <div>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            // placeholder="Nome da Categoria"
            onChange={handler}
          />

          <FormField
            label="Descrição da Categoria"
            type="textarea"
            name="description"
            value={values.description}
            // placeholder="Descrição da Categoria"
            onChange={handler}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            // placeholder="Cor da Categoria"
            onChange={handler}
          />
        </div>

        <Button type='submit'>
          Cadastrar
        </Button>
      </form>

      <div style={{padding: 10}}>
        {categories.length === 0 && (
        <div>
          <div style={{padding: 5}}>
              <LinearProgress/>
          </div>
        </div>
        )}
      </div>
    
  



      <u1>
        {categories.map((category, index) => (
          <li key={`${category.title}${index}`}>
            {category.title}
          </li>
        ))}
      </u1>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegister;
