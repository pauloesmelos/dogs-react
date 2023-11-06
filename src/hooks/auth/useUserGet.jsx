import React from 'react';
import URL from '../../URL';
import axios from 'axios';
import { useQuery } from 'react-query';

const getUser = async (token) => {
    if(token) {
        return await axios.get(`${URL}api/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.data)
    }
}

const useUserGet = (token) => {
  const query = useQuery(["get-user"], () => getUser(token), {
    enabled: !!token, // impede a chamada caso token seja null/false
  });
  return query;
}

export default useUserGet;