import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();
  React.useEffect(() => {
    switch(location.pathname) {
      case "/conta":
        setTitle("Minha conta");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      default:
        setTitle("Minha conta");
        break;
    }
    
  }, [location]);

  return (
    <header className="grid grid-cols-2 mt-5 relative items-center">
        <h1 className="text-4xl text-black font-spectral font-bold ml-5 after:block after:w-4
        after:h-3 after:bg-yellow-400/80 after:absolute after:top-5 after:left-4 after:-z-10">
          {title}
        </h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader;