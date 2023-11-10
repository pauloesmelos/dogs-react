import React from 'react';
import usePhotoGetUnique from '../../hooks/auth/usePhotoGetUnique';
import PhotoModal from './PhotoModal';
import Image from '../image/Image';

const FeedModal = ({ photo }) => {
  const { photoUnique, refetch } = usePhotoGetUnique(photo.id); // mostrar a foto de acordo com esse objeto

  React.useEffect(() => {
    console.log(photoUnique);
    refetch();
  }, [photo]);

  return (
    <div className={``}>
      { photoUnique && <PhotoModal data={photoUnique}  /> }
      { photoUnique && <Image src={photoUnique.photo.src} alt={photoUnique.photo.title} /> }
    </div>
  )
}

export default FeedModal;