import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CategoryRegister() {
    const initCategory = {
      name: '',
      description: '',
      color: '',
    }

    const [categories, setCategories] = useState([])
    const [values, setValues] = useState(initCategory);

    
    function setValue(key, value) {
      setValues({
        ...values,
        [key]: value, //'name': valor
      })
    }

    function handler(eventInfo) {
      setValue(
        eventInfo.target.getAttribute('name'), 
        eventInfo.target.value
        );
    }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

          <form style = {{background: values.color}} onSubmit = {function handleSubmit(eventInfo) {
            eventInfo.preventDefault();
            setCategories([
              ...categories,
              values
            ]);

            setValues(initCategory);
          }}>

            <div>

              <FormField 
                type = 'text'
                name = 'name'
                value = {values.name}
                placeholder = 'Nome da Categoria'
                onChange = {handler}
              />

              
              <FormField 
                type = 'text'
                name = 'description'
                value = {values.description}
                placeholder = 'Descrição da Categoria'
                onChange = {handler}
              />

              <FormField 
                type = 'color'
                name = 'color'
                value = {values.color}
                placeholder = 'Cor da Categoria'
                onChange = {handler}
              />
            </div>


            <button>
              Cadastrar
            </button>
          </form>

          <u1>
            {categories.map((category, index)=>{
              return(
                <li key={`${category}${index}`}>
                  {category.name}
                </li>
              )
            })}
          </u1>

        <Link to = '/'>
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CategoryRegister;
