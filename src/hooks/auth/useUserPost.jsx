import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import URL from '../../URL';

const postUser = async (body) => {
    console.log(body);
    return await axios.post(`${URL}api/user`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => r.status);
}
const useUserPost = () => {
  const [status, setStatus] = React.useState({
    msg: "",
    cod: 0
  });
  const {mutate: userPost} = useMutation({
    mutationFn: postUser,
    mutationKey: ["post-user"],
    onSuccess: (stt) => {
        setStatus({
            msg: "Conta criada com sucesso",
            cod: stt
        });
    },
    onError: (s) => {
        if(s.response.status === 406) {
            setStatus({
                msg: "Erro, preencha os campos corretamente",
                cod: s.response.status
            });
        }
        else if(s.response.status === 403) {
            setStatus({
                msg: "Erro, as credenciais já estão em uso",
                cod: s.response.status
            });
        }
    }
  })
  return { userPost, status, setStatus };
}

export default useUserPost;