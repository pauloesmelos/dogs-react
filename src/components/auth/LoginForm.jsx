import React from 'react';
import { Link } from 'react-router-dom';
import useUserLogin from '../../hooks/auth/useUserLogin';
import Button from './form/button/Button';
import Input from './form/input/Input';
import useForm from '../../hooks/form/useForm';
import useUserGet from '../../hooks/auth/useUserGet';
import { UserContext } from '../../global/UserContext';

const LoginForm = () => {
  const user = useForm("user");
  const password = useForm("password");
  const [token, setToken] = React.useState('');
  const { mutation, fail: loginFail } = useUserLogin(setToken); // loginMutate recebe mutate

  async function onSubmit(event) {
    event.preventDefault();
    const credentials = { username: user.value, password: password.value }; // ATENÇÃO: A API recebe username e password, portanto atenção ao passar as credenciais
    // deve ser o mesmo nome
    if(user.validate() && password.validate()) {
      mutation({ credentials });
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-black text-bold">Login</h1>
      <form onSubmit={onSubmit}>
        <Input
          label="Usuário: " 
          type="text"
          name="user" 
          value={user.value} 
          onChange={user.onChange}
          onBlur={user.onBlur}
          placeholder="Seu usuário"
          error={user.error}
        />
        <Input 
          label="Senha: " 
          type="password" 
          name="password" 
          value={password.value} 
          onChange={password.onChange}
          onBlur={password.onBlur}
          placeholder="Sua senha"
          error={password.error}
        />
        {loginFail && <p className="text-xl text-red-600">Usuário e/ou senha inválidos</p>}
        <Button 
          type="submit"
        >
          Entrar
        </Button>
        <Link 
        to="cadastro"
        className="px-5 py-2 bg-green-500 mt-5 ml-5 rounded text-green-900 hover:opacity-70 duration-200"
        >
          Cadastre-se
        </Link>
      </form>
    </section>
  )
}

export default LoginForm
