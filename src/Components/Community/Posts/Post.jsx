import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Comment from '../Comment/Comment';
import ImageGrid from '../Image Grid/ImageGrid';

const Post = () => {
  const [likeState, setlikeState] = useState(false);
  
  const handlelikechange = () => {
    setlikeState(!likeState);
  };
  
  const photos = [
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
  ];
  
  return (
    <div className='flex justify-center min-w-screen'>
      <div className='p-5 border border-slate-300 rounded-xl h-auto w-1/2'>
        <div className='flex flex-row item-center gap-2 mb-2'>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
            className="object-cover w-8 h-8 rounded-full 
                      border-2 border-emerald-400  shadow-emerald-400"
            alt="profile"
          />
          <h1 className='font-semibold'>Sanchi Chaurasia</h1>
        </div>
        <div className='bg-slate-100 h-auto w-full rounded-xl p-4'>
          <ImageGrid imageUrl={photos} />
        </div>
        <div className='m-3 flex flex-row gap-5'>
          <button className='p-0 m-0' onClick={handlelikechange}>
            {likeState ? <FaHeart color='#FF3E6C'/> : <FaRegHeart />}
          </button>
          <FaRegComment />
          <FaRegShareFromSquare />
        </div>
        <div className='flex justify-center items-center'>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Post;
