import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';
import URL from '../../URL';
import { UserContext } from '../../global/UserContext';

const authUser = async (values) => {
    const { credentials } = values; // p desestruturas, usar o msm nome onde é passado os param
    return await axios.post(`${URL}jwt-auth/v1/token`, credentials, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}
const useUserLogin = (setToken) => {
  const [fail, setFail] = React.useState(null);

  const { mutate: mutation } = useMutation({
    mutationFn: authUser,
    mutationKey: ["user-login"],
    onSuccess: (data) => {
      setToken(data.token);
      setFail("");
      window.localStorage.setItem("token", data.token);
      location.reload();
    },
    onError: () => {
      window.localStorage.removeItem("token");
      setFail("Usuário e/ou senha incorretos");
    }
  })
  return { mutation, fail };
}

export default useUserLogin;