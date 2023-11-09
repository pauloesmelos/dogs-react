import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  const [modalImage, setModalImage] = React.useState(null);
 
  return (
    <div className="animate-toLeft mx-10">
      Feed
      { modalImage && <FeedModal photo={modalImage} /> }
      <FeedPhotos setModalImage={setModalImage} />
    </div>
  )
}

export default Feed;