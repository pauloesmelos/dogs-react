import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../assets/dogs.svg?react';
import { UserContext } from '../global/UserContext';
const Header = () => {
  const { data, isLogin, isLoading, refetch } = React.useContext(UserContext);

  return (
    <header className="fixed w-full p-5 shadow-md shadow-black/30 bg-white/90 top-0">
      <nav className="flex justify-between items-center">
        <Link to="/" aria-label="Dogs - Home">
            <Logo />
        </Link>
        { data 
          ?
          <Link 
            to="/conta"
            className="flex items-center">
            {data.nome}
            <span><AiOutlineUser className="text-lg ml-5" /></span>
          </Link>
          :
          <Link 
            to="/login"
            className="flex items-center">
            Login / Criar
            <span><AiOutlineUser className="text-lg ml-5" /></span>
          </Link>
        }
      </nav>
    </header>
  )
}

export default Header;