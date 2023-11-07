import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserHeader from './UserHeader';

const User = () => {
  return (
    <div className="pt-16">
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postar" element={<UserPhotoPost />} />
            <Route path="/estatisticas" element={<UserStats />} />
        </Routes>
    </div>
  )
}

export default User;