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
        <NavLink to="/conta">
            Minha conta
            <MinhasFotos />
        </NavLink>
        <NavLink to="/conta/estatisticas">
            Estatísticas
            <Estatisticas />
        </NavLink>
        <NavLink to="/conta/postar">
            Adicionar Foto
            <AdicionarFoto />
        </NavLink>
        <button onClick={() => logout()} className="flex flex-col">
            Sair
            <Sair />
        </button>
    </nav>
  )
}

export default UserHeaderNav;