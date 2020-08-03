import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonRegister from '../../../components/Button/ButtonRegister/index';
import ColoredCircularProgress from '../../../components/Progress/ColoredCircularProgress';
import {
  List,
  ListItem,
  ListLine,
  ListCommand,
  Color,
  ButtonRemove 
  } from'../../../components/List/index';

import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import DeleteIcon from '@material-ui/icons/Delete';
import { SvgIcon } from '@material-ui/core';

function CategoryRegister() {

  const initValues = {
    title: '',
    description: '',
    color: '',
    extra_link: {
      text: '',
      url: '',
    },
  }

  const { handler, values, clearForm } = useForm(initValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  const removeCategory = (categoryId) => {
    categoriesRepository
      .remove(categoryId)
      .then(() => {
        setCategories(
          categories
            .filter((category) => category.id !== categoryId)
            .map((c) => c)
        )
        clearForm()
      })
      .catch(() => {
      })
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.title}
      </h1>

      <form
        style={{ background: values.color }}
        onSubmit={(event) => {
          event.preventDefault();
          setCategories([
            ...categories,
            values,
          ]);
          categoriesRepository.create({
            title: values.title,
            url: values.url,
            description: values.description,
            color: values.color,
            extra_link: {
              text: values.extra_text,
              url: values.extra_url,
            },
          })
          .then(() => {
            console.log('category cadastrado com sucesso!');
            console.log(categories);
            // history.push('/');
            alert('Categoria Cadastrado com sucesso!');
            clearForm();
          });
        }}>

        <div>

          <FormField
            label="Nome da categoria"
            type="text"
            name="title"
            value={values.title}
            // placeholder="Nome da category"
            onChange={handler}
          />

          <FormField
            label="Descrição da categoria"
            type="textarea"
            name="description"
            value={values.description}
            // placeholder="Descrição da category"
            onChange={handler}
          />

          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            // placeholder="Cor da category"
            onChange={handler}
          />

          
          <FormField
            label="Texto do Link extra"
            type="text"
            name="extra_text"
            value={values.extra_text}
            // placeholder="Cor da category"
            onChange={handler}
          />

          <FormField
            label="URL do Link extra"
            type="text"
            name="extra_url"
            value={values.extra_url}
            // placeholder="Cor da category"
            onChange={handler}
          />
        </div>

        <ButtonRegister type='submit'>
          Cadastrar
        </ButtonRegister>
      </form>

      <div style={{padding: 10}}>
        {categories.length === 0 && (
        <div>
          <div style={{padding: 5}}>
              <ColoredCircularProgress />
          </div>
        </div>
        )}
      </div>
    
      <div style={{paddingTop: 15}}>
          <h3>
            Categorias Cadastradas
          </h3>
      </div>


      <List>
            {categories.map((category, index) => (
              <ListItem key={index}>
                <ListLine >
                  <Color color={category.color} />
                    <span>{category.title}</span>{' '}
                </ListLine>
                <ListCommand>
                  <ButtonRemove
                    style={{height: '1.5rem'}}
                    onClick={() => removeCategory(category.id || 0)}
                  >
                    <SvgIcon component={DeleteIcon} />
                  </ButtonRemove>
                </ListCommand>
              </ListItem>
            ))}
          </List>


{/*       <u1 style={{padding: 20}}>
        {categories.map((category, index) => (
          <li key={`${category.title}${index}`}>
            {category.title}
          </li>
        ))}
      </u1> */}

    </PageDefault>
  );
}

export default CategoryRegister;
