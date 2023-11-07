import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/auth/Login';
import { UserContextProvider } from './global/UserContext';
import User from './components/user/User';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

const App = () => {

  return (
    <>
     <BrowserRouter>
     <UserContextProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route 
            path="/conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
     </UserContextProvider>
     </BrowserRouter>
    </>
  )
}

export default App;