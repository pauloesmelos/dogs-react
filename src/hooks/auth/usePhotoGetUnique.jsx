import axios from 'axios';
import URL from '../../URL';
import { useQuery } from 'react-query'; // queryCache

const getPhotoUnique = async (id) => {
    if(id) {
      return await axios.get(`${URL}api/photo/${id}`
      )
      .then(response => response.data);
    }
}

const refetch = async () => {
  
}

const usePhotoGetUnique = (id) => {
  const { data: photoUnique } = useQuery(["get-unique-photo"],  () => {
    return getPhotoUnique(id); // sem o return a query retorna undefined
  }
  );

  return { photoUnique, refetch };
}

export default usePhotoGetUnique;