import React from 'react';

const ImageGrid = ({ imageUrl }) => {
  return (
    <div className="grid grid-cols-6 gap-9">
      {imageUrl.map((url, index) => (
        <div className=''>
        <img key={index} src={url} alt={`image-${index}`} className=" h-44 rounded" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
