import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useUserPhotoGet from '../../hooks/auth/useUserPhotoGet';

const FeedPhotos = ({ photo, setModalImage }) => {
  const { photos, loading } = useUserPhotoGet(1,10,0)

  if(loading) return <p>Carregando...</p>
  if(photos) {
    return (
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 items-center justify-center
      sm:[&>*:nth-child(even)]:row-span-2 sm:[&>*:nth-child(even)]:col-span-2">
        {photos.map(e => (
          <FeedPhotosItem photo={e} key={e.id} setModalImage={setModalImage} />
        ))}
      </ul>
    )
  }
  
}

export default FeedPhotos;