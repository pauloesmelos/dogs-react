import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import URL from '../../URL';
import { UserContext } from '../../global/UserContext';

const authUser = async (body) => {
    return await axios.post(`${URL}jwt-auth/v1/token`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.data);
}
const useUserLogin = (setToken) => {
  const [fail, setFail] = React.useState(null);
  const { navigate } = React.useContext(UserContext);

  const { mutate: mutation } = useMutation({
    mutationFn: authUser,
    mutationKey: ["user-login"],
    onSuccess: (data) => {
      setToken(data.token);
      setFail("");
      window.localStorage.setItem("token", data.token);
      navigate("/conta");
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