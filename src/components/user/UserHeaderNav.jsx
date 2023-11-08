import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../global/UserContext';
import Sair from '../../assets/sair.svg?react';
import AdicionarFoto from '../../assets/feed.svg?react';
import MinhasFotos from '../../assets/adicionar.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';

const UserHeaderNav = () => {
  const { logout } = React.useContext(UserContext);

  return (
    <nav className="grid grid-cols-4">
        <NavLink to="/conta" className="flex flex-col h-10 w-10 bg-gray-200 border-s-transparent
        justify-center items-center rounded duration-200 hover:bg-white hover:border-black/80 hover:border hover:shadow-lg outline-none shadow:black">
            <span className="sm:hidden">Minha conta</span>
            <MinhasFotos />
        </NavLink>
        <NavLink to="/conta/estatisticas"className="flex flex-col h-10 w-10 bg-gray-200 border-s-transparent justify-center items-center rounded duration-200 hover:bg-white hover:border-black/80 hover:border hover:shadow-lg outline-none shadow:black">
            <span className="sm:hidden">Estatísticas</span>
            <Estatisticas />
        </NavLink>
        <NavLink to="/conta/postar" className="flex flex-col h-10 w-10 bg-gray-200 border-s-transparent
        justify-center items-center rounded duration-200 hover:bg-white hover:border-black/80 hover:border hover:shadow-lg outline-none shadow:black">
            <span className="sm:hidden">Adicionar Foto</span>
            <AdicionarFoto />
        </NavLink>
        <button onClick={() => logout()} className="flex flex-col h-10 w-10 bg-gray-200 border-s-transparent justify-center items-center rounded duration-200
        hover:bg-white hover:border-black/80 hover:border hover:shadow-lg outline-none
        shadow:black">
            <span className="sm:hidden">Sair</span>
            <Sair />
        </button>
    </nav>
  )
}

export default UserHeaderNav;