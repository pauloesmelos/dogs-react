import React from 'react';
import UserHeaderNav from './UserHeaderNav';

const UserHeader = () => {
  return (
    <header>
        <h1 className="text-4xl text-black">Sua conta</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader;