import axios from 'axios';
import { useMutation } from 'react-query';
import URL from '../../URL';

const tokenPost = async (token) => {
    if(token) {
        try {
            return axios.post(`${URL}jwt-auth/v1/token/validate`,token, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => response.data);
        }
        catch(erro) {
            console.log(erro);
            return false;
        }
    }
}
const useTokenValidate = () => {
  const mutate = useMutation({
    mutationFn: tokenPost,
    mutationKey: ["token-validate"]
  })
  return mutate;
}

export default useTokenValidate;