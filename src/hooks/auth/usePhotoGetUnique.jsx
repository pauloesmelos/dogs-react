import axios from 'axios';
import React from 'react';
import URL from '../../URL';
import { useQuery } from 'react-query';

const getPhotoUnique = async (id) => {
    return axios.get(`${URL}api/photo/${id}`)
    .then(response => response);
}

const usePhotoGetUnique = (id) => {
  const query = useQuery(["get-unique-photo"], () => {
    getPhotoUnique(id)
  }, {
    enabled: !!id // estudar o funcionamento do enabled
  }
  );
  return query;
}

export default usePhotoGetUnique;