import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../assets/dogs.svg?react';
const Header = () => {
  return (
    <header className="fixed w-full p-5 shadow-md shadow-black/30 bg-white/90 top-0">
      <nav className="flex justify-between items-center">
        <Link to="/" aria-label="Dogs - Home">
            <Logo />
        </Link>
        <Link to="/login"
        className="flex items-center">
            Login / Criar
            <span><AiOutlineUser className="text-lg ml-5" /></span>
        </Link>
      </nav>
    </header>
  )
}

export default Header;