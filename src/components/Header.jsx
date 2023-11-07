import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { UserContext } from '../global/UserContext';
import Logo from '../assets/dogs.svg?react';
const Header = () => {
  const { dataUser, logout, isLogin } = React.useContext(UserContext);
 
  return (
    <header className="fixed z-30 w-full p-5 bg-white top-0 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link to="/" aria-label="Dogs - Home">
            <Logo />
        </Link>
        { dataUser 
          ?
          <div className="flex justify-end">
            <Link 
              to="/conta"
              className="flex items-center hover:text-yellow-500">
              {dataUser.nome}
              <span><AiOutlineUser className="text-lg ml-2" /></span>
            </Link>
            <button className="hover:text-yellow-500" onClick={() => logout()}>
              <BiLogOut className="text-xl ml-5" />
            </button>
          </div>
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