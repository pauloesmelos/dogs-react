import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useUserPhotoGet from '../../hooks/auth/useUserPhotoGet';

const FeedPhotos = () => {
  const { photos, erro, loading, refetch } = useUserPhotoGet(1,6,0)

  if(loading) return <p>Carregando...</p>
  if(photos) {
    return (
      <ul>
        {photos.map(e => (
          <FeedPhotosItem photo={e} key={e.id} />
        ))}
      </ul>
    )
  }
  
}

export default FeedPhotos;