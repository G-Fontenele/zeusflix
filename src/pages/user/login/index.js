import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

// import { LinearProgress } from '@material-ui/core';

import usersRepository from '../../../repositories/users';

function Login() {
  const history = useHistory();

  const initValues = {
    username: '',
    password: '',
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
        Seja bem vindo:
        {' '}
        {values.username}
      </h1>

      <form 
        style={{paddingBottom: 20}}
 /*        onSubmit={(event) => {
          event.preventDefault();
          console.log(usersRepository.getAll());
          usersRepository.create({
            username: values.username,
            password: values.password,
          })
            .then(() => {
              history.push('/');
              setUserValues(
                {
                  username: values.username,
                  password: '',
                },
              );
            // alert('Categoria Cadastrado com sucesso!');
            // clearForm();
            });
        }} */
        onSubmit={(event) => {
          event.preventDefault();
          console.log(usersRepository.getAll());
        }}
      >

        <div>

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

        </div>

        <Button type="submit">
          Entrar
        </Button>
      </form>

      <div style={{paddingTop: 10, paddingBottom: 50}}>
        <Link style={{padding: 30}} to = '/'>
          Esqueci minha senha
        </Link>

        <Link style={{padding: 30}} to = '/user/register'>
          Ainda Não estou inscrito
        </Link>
      </div>

    </PageDefault>
  );
}

export default Login;
