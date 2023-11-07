import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../global/UserContext';
import useUserLogin from '../../hooks/auth/useUserLogin';
import useForm from '../../hooks/form/useForm';
import Button from './form/button/Button';
import Input from './form/input/Input';

const LoginForm = () => {
  const user = useForm("user");
  const password = useForm("password");
  const [token, setToken] = React.useState('');
  const { mutation, fail: loginFail } = useUserLogin(setToken); // loginMutate recebe mutate
  const { isLoading } = React.useContext(UserContext);

  async function onSubmit(event) {
    event.preventDefault();
    const credentials = { username: user.value, password: password.value }; // ATENÇÃO: A API recebe username e password, portanto atenção ao passar as credenciais
    // deve ser o mesmo nome
    if(user.validate() && password.validate()) {
      mutation(credentials);
    }
  }
  return (
    <section className="animate-toLeft p-3">
      <h1 className="text-6xl text-black text-bold z-20 after:block after:w-5 after:h-6 after:bg-yellow-500 after:absolute
      after:rounded-sm after:top-7 after:-z-10 font-spectral">
        Login
      </h1>
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
        { 
          isLoading 
          ?
          <Button type="submit" disabled>
            Carregando...
          </Button>
          :
          <Button 
            type="submit"
          >
            Entrar
          </Button>     
        }
        <Link className="border-b-2 border-gray-700 ml-5" to="/login/perdeu">Perdeu a senha ?</Link>
        <div className="mt-5">
          <h2 className="text-3xl after:block after:w-16 after:h-3 after:bg-gray-700/20">Cadastre-se</h2>
          <p className="text-gray-600 text-lg my-3">Ainda não possui conta ? </p>
          <Link 
          to="cadastro"
          className="px-5 py-2 bg-yellow-400/90 rounded text-yellow-900 hover:opacity-70 duration-200"
          >
            Cadastro
          </Link>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
