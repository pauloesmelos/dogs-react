import axios from 'axios';
import React from 'react';
import URL from '../../URL';
import { useMutation } from 'react-query';

const postPhoto = async ({formData: data, token}) => { // token = token: token

    return axios.post(`${URL}api/photo`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.data);
}

const useUserPhotoPost = () => {
  const { mutate: photoPost, isLoading: loading, isSuccess: sucess, isError: error } = useMutation({
    mutationFn: postPhoto,
    mutationKey: ["post-photo"],
    onSuccess: (r) => console.log("sucessss" + r),
  });
  return { photoPost, loading, sucess, error };
}

export default useUserPhotoPost;