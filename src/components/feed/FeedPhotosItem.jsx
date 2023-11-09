import React from 'react';
import Image from '../image/Image';
import Visualizacao from '../../assets/visualizacao.svg?react';

const FeedPhotosItem = ({ photo, setModalImage }) => {
  const [span ,setSpan] = React.useState(false);
  //1) pra dar rounded no <li> usar o overflow-hidden
  //2) col-start-1 row-start-1 em elementos filhos de uma grid pai deixa um em cima do outro
  // se vc aplicar o efeito em um, o outro filho herda automaticamente 
  // (aumentei o nível de escuridão no span e a img tbm ficou mais escura)
  function handleClick() {
    setModalImage(photo);
  }
  return (
    <li 
      className="grid cursor-pointer overflow-hidden rounded-sm" 
      onPointerOver={() => setSpan(true)}
      onPointerOut={() => setSpan(false)}
      onClick={handleClick}
    >
      <Image 
        src={photo.src}
        title={photo.title}
        className="col-start-1 row-start-1"
      />
      <span 
        className={`col-start-1 row-start-1 text-white font-bold bg-black/20 text-center
        items-center justify-center gap-2 ${span ? "flex" : "hidden"}`}
      >
        {photo.acessos}
        <Visualizacao />
      </span>
    </li>
  )
}

export default FeedPhotosItem;