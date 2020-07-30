import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

  function handler(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
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
        }}
      >

        <div>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            placeholder="Nome da Categoria"
            onChange={handler}
          />

          <FormField
            label="Descrição da Categoria"
            type="text"
            name="description"
            value={values.description}
            placeholder="Descrição da Categoria"
            onChange={handler}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            placeholder="Cor da Categoria"
            onChange={handler}
          />
        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

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
