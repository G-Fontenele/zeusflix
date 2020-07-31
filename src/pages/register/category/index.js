import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { LinearProgress } from '@material-ui/core';



function CategoryRegister() {
  const initCategory = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initCategory);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // 'name': valor
    });
  }

  const maxCategoryChar = 40;
  function handler(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
    if (eventInfo.target.getAttribute('name') === 'name') {
      if (eventInfo.target.value.length > maxCategoryChar) {
        eventInfo.target.value = eventInfo.target.value.substring(0, maxCategoryChar - 1);
        setValue(
          eventInfo.target.value,
          eventInfo.target.getAttribute('name'),
        );
      }
    }
  }

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
        onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategories([
            ...categories,
            values,
          ]);

          setValues(initCategory);
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

        <Button>
          Cadastrar
        </Button>
      </form>


      {categories.length === 0 && (
      <div>
        <div style={{padding: 5}}>
            <LinearProgress/>
        </div>
      </div>
      )}
    
  



      <u1>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.name}
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
