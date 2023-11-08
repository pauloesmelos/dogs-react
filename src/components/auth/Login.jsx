import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../global/UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
  const { isLogin } = React.useContext(UserContext);
  if(isLogin) return <Navigate to="/conta" />
  return (
    <section className="sm:flex w-full h-screen z-10">
      <div className="bg-[url('../assets/login.jpg')] bg-center bg-cover bg-no-repeat w-1/2">

      </div>
      <div className="pt-20 p-6 max-w-5xl">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginLost />} />
          <Route path="/resetar" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
