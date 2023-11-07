import React from 'react';
import Input from './form/input/Input';
import useForm from '../../hooks/form/useForm';
import Button from './form/button/Button';
import useUserPost from '../../hooks/auth/useUserPost';
import { PiDog } from 'react-icons/pi';
import useUserLogin from '../../hooks/auth/useUserLogin';
import { UserContext } from '../../global/UserContext';
 
const LoginCreate = () => {
  const { setToken } = React.useContext(UserContext);
  const user = useForm("user");
  const password = useForm("password");
  const email = useForm("email");
  const { userPost, status, setStatus } = useUserPost();
  const { mutation } = useUserLogin(setToken);

  async function onSubmit(event) {
    event.preventDefault();
    setStatus({
      msg: "",
      cod: 0
    });
    const credentialsCadastro = { username: user.value, password: password.value, email: email.value };
    userPost(credentialsCadastro);
  }
  React.useEffect(() => {
    if(status.cod === 200) {
      const credentialsLogin = { username: user.value, password: password.value }
      mutation(credentialsLogin);
      console.log("cadastrou e logou");
    }
  }, [status]);
  return (
    <section className="animate-toLeft">
      <h1 className="text-bold text-4xl text-black after:block after:w-16 after:h-3 after:bg-yellow-400/80">
        Cadastre-se agora
      </h1>
      <form onSubmit={onSubmit}>
        <Input 
          label="Usuário" 
          type="text" 
          name="user" 
          id="user"
          value={user.value}
          onChange={user.onChange}
          onBlur={user.onBlur}
          error={user.error}
        />
        <Input
          label="Email" 
          type="email"
          name="email" 
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          error={email.error}   
        />
        <Input 
          label="Senha" 
          type="password" 
          name="password" 
          id="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        { status && (status.cod === 200 ) && 
          <p className="my-3 text-lg text-emerald-500 flex items-center gap-1">
            {status.msg} <PiDog className="animate-ping" />
          </p>
        }
        { status && (status.cod === 403 || status.cod === 406) && 
          <p className="my-3 text-lg text-red-600 flex items-center gap-1">
            {status.msg} <PiDog className="animate-ping" />
          </p>
        }
        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate;