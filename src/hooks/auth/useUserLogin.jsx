import axios from 'axios';
import { useMutation } from 'react-query';
import URL from '../../URL';

const authUser = async (credentials) => {
    return await axios.post(`${URL}jwt-auth/v1/token`, credentials, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}
const useUserLogin = (setToken) => {

  const mutation = useMutation({
    mutationFn: authUser,
    mutationKey: ["user-login"],
    onSuccess: (response) => {
        setToken(response.token);
    }
  })
  return mutation;
}

export default useUserLogin;