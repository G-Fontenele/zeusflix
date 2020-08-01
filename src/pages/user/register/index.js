import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// import { LinearProgress } from '@material-ui/core';

import usersRepository from '../../../repositories/users';


function RegisterUser() {

  const history = useHistory();

  const initValues = {
    name: '',
    username: '',
    password: '',
    confirmation: '',
  };

  const { handler, values, clearForm } = useForm(initValues);

  const [userValues, setUserValues] = useState([]);

  useEffect(() => {
    usersRepository
      .getAll()
      .then((usersFromServer) => {
        setUserValues(usersFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Novo Usuário
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          usersRepository.create({
            name: values.name,
            username: values.username,
            password: values.password,
            confirmation: values.confirm,
          })
            .then(() => {
              clearForm();
              history.push('/');
            });
            alert('Usuário cadastrado!');

        }}>

        <div>

          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
            // placeholder="Nome da Categoria"
            onChange={handler}
          />

          <FormField
            label="E-mail ou Username"
            type="text"
            name="username"
            value={values.username}
            // placeholder="Nome da Categoria"
            onChange={handler}
          />

          <FormField 
            label="Senha"
            type="password"
            name="password"
            value={values.password}
            // placeholder="Descrição da Categoria"
            onChange={handler}
          />

          <FormField 
            label="Confirmação de senha"
            type="password"
            name="confirm"
            value={values.confirm}
            // placeholder="Descrição da Categoria"
            onChange={handler}
          />

        </div>

        <Button type="submit">
          Inscrever-se
        </Button>
      </form>

    </PageDefault>
  );
}

export default RegisterUser;
