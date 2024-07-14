import React from 'react';

const ImageGrid = ({ imageUrl }) => {
  return (
    <div className="grid grid-cols-6 gap-2">
      {imageUrl.map((url, index) => (
        <div className='h-24 w-[7vw]'>
        <img key={index} src={url} alt={`image-${index}`} className=" w-auto h-24 rounded" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
