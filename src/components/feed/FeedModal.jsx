import React from 'react';
import usePhotoGetUnique from '../../hooks/auth/usePhotoGetUnique';
import PhotoModal from './PhotoModal';

const FeedModal = ({ photo }) => {
  const { data } = usePhotoGetUnique(photo.id);
  
  return (
    <div className={``}>
      { data && <PhotoModal data={data} /> }
    </div>
  )
}

export default FeedModal;