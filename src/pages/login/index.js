import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// import { LinearProgress } from '@material-ui/core';

// import categoriesRepository from '../../../repositories/categories';


function Login() {
  const initValues = {
    title: '',
    description: '',
    color: '',
    extra_link: {
      text: '',
      url: '',
    },
  };

  const { handler, values, clearForm }= useForm(initValues);

  const [categories, setCategories] = useState([]);



  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8000/users'
        : 'https://zeusflix.herokuapp.com/users'; 

      fetch(URL_TOP)
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
        Cadastro de Categoria: {values.title}
      </h1>

      <form
        style={{ background: values.color }}
        onSubmit={function handler(event) {
          event.preventDefault();
          setCategories([
            ...categories,
            values,
          ]);
           categoriesRepository.create({
            title: values.title,
            url: values.url,
            description: values.description,
            extra_link: {
              text: values.extra_text,
              url: values.extra_url,
            },
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
            name="title"
            value={values.title}
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

          
          <FormField
            label="Texto do Link extra"
            type="text"
            name="extra_text"
            value={values.extra_text}
            // placeholder="Cor da Categoria"
            onChange={handler}
          />

          <FormField
            label="URL do Link extra"
            type="text"
            name="extra_url"
            value={values.extra_url}
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
    
      <div style={{paddingTop: 15}}>
          <h3>
            Categorias Cadastradas
          </h3>
      </div>



      <u1 style={{padding: 20}}>
        {categories.map((category, index) => (
          <li key={`${category.title}${index}`}>
            {category.title}
          </li>
        ))}
      </u1>

    </PageDefault>
  );
}

export default Login;
