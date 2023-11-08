import React from 'react';
import Input from '../../auth/form/input/Input';
import Button from '../../auth/form/button/Button';
import useUserPhotoPost from '../../../hooks/auth/useUserPhotoPost';
import { UserContext } from '../../../global/UserContext';
import { BiSolidDog } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState({
    upload: null,
    preview: null
  });
  const { photoPost, loading, sucess, error } = useUserPhotoPost();
  const { token } = React.useContext(UserContext); // pegar do localStorage tbm dá certo
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nome", name);
    formData.append("peso", peso);
    formData.append("idade", idade);
    formData.append("img", img.upload);
    photoPost({formData, token});
  }
  function handleImg({ target }) {
    setImg({
        upload: target.files[0],
        preview: URL.createObjectURL(target.files[0])
    });
  }
  React.useEffect(() => {
    if(sucess) {
        const timeout = setTimeout(() => {
            navigate("/conta");
            console.log("timer");
        }, 3000);
    }
  }, [navigate, sucess]);

  return (
    <div className={`${img.preview ? "grid grid-cols-2 gap-5 p-2" : ""}`}>
        <form onSubmit={onSubmit}>
            <Input
                label="Nome" 
                type="text" 
                name="name" 
                id="name"
                value={name}
                setValue={setName}
            />
            <Input
                label="Peso" 
                type="number" 
                name="peso" 
                id="peso"
                value={peso}
                setValue={setPeso}
            />
            <Input
                label="Idade" 
                type="number" 
                name="idade" 
                id="idade"
                value={idade}
                setValue={setIdade}
            />
            <input 
                type="file"
                name="img" 
                id="id"
                onChange={handleImg}
                className="mb-5"
            />
            {
                loading ?
                <Button type="submit">Carregando ...</Button> :
                <Button type="submit">Postar</Button>
            }
        </form>
        {
            img.preview && 
            <div className="pt-8">
                <img src={img.preview} alt="Sua imagem" title="Imagem do usuário"
                className="w-22 h-42 rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"/>
            </div>
        }
        {
            sucess &&
            <p className="flex gap-2 text-green-500 text-2xl mt-3">
                Foto enviada com sucesso
                <BiSolidDog className="animate-ping" />
            </p>
        }
        {
            error && 
            <p className="flex gap-2 text-red-500 text-2xl mt-3">
                Houve um erro ao enviar a foto
                <BiSolidDog className="animate-ping" />
            </p>
        }
    </div>
  )
}

export default Form;