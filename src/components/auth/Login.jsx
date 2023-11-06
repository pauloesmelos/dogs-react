import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
  return (
    <div className="pt-16">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cadastro" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginLost />} />
          <Route path="/resetar" element={<LoginReset />} />
        </Routes>
    </div>
  )
}

export default Login
