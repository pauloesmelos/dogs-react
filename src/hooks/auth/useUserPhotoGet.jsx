import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import URL from '../../URL';

const getPhotos = async (page, total, user) => {
    console.log(page,total,user);
    return await axios.get(`${URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`)
    .then(response => response.data);
}

const useUserPhotoGet = (page, total, user) => {
  const { data: photos, error: erro , isLoading: loading , refetch } = useQuery(
    ["photo-get"] , () => getPhotos(page, total, user), {
        enabled: !!total
    }
  );
  return { photos, erro, loading, refetch };
}

export default useUserPhotoGet;