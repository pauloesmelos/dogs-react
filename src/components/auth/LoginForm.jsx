import React from 'react';
import { Link } from 'react-router-dom';
import useUserLogin from '../../hooks/auth/useUserLogin';
import Button from './form/button/Button';
import Input from './form/input/Input';

const LoginForm = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');
  const { mutate } = useUserLogin(setToken);

  function onSubmit(event) {
    event.preventDefault();
    const credentials = { username: user, password }; // ATENÇÃO: A API recebe username e password, portanto atenção ao passar as credenciais
    // deve ser o mesmo nome
    mutate(credentials);
  }
  return (
    <section>
      <h1 className="text-3xl text-black text-bold">Login</h1>
      <form onSubmit={onSubmit}>
        <Input
          label="Usuário: " 
          type="text"
          name="user" 
          value={user} 
          onChange={({ target }) => setUser(target.value)} 
          placeholder="Seu usuário" 
        />
        <Input 
          label="Senha: " 
          type="password" 
          name="password" 
          value={password} 
          onChange={({ target }) => setPassword(target.value)} 
          placeholder="Sua senha" 
        />
        <Button 
          type="submit"
        >
          Entrar
        </Button>
      </form>
      <Link to="cadastro">Cadastre-se</Link>
    </section>
  )
}

export default LoginForm
