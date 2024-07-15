import React, { useState } from 'react';
import { LikePosts } from '../../../Services/LikePost';
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Comment from '../Comment/Comment';
import ImageGrid from '../Image Grid/ImageGrid';

const Post = ({post , isLiked}) => {
  console.log(post);
  const [likeState, setlikeState] = useState(isLiked);
  
  const handlelikechange = () => {
         LikePosts(post._id)
          setlikeState(!likeState);
  };
  
  
  
  return (
    <>
      {post && (
        <div className="flex justify-center w-full">
          <div className="p-5 border border-slate-300 rounded-xl h-auto w-1/2">
            <div className="flex flex-row item-center gap-2 mb-2">
              <img
                src={post.user.userImage}
                className="object-cover w-8 h-8 rounded-full 
                      border-2 border-emerald-400  shadow-emerald-400"
                alt="profile"
              />
              <h1 className="font-semibold">{post.user.name}</h1>
            </div>
            <div className="bg-slate-100  w-full rounded-xl p-4">
              <ImageGrid imageUrl={post.photos} />
            </div>
            <div className="m-3 flex flex-row gap-5  items-center">
              <button
                className="p-0 m-0 flex justify-center items-center gap-2"
                onClick={handlelikechange}>
                {likeState ? <FaHeart color="#FF3E6C" /> : <FaRegHeart />}
              </button>
              <FaRegComment />
              <FaRegShareFromSquare />
            </div>
            <div className="flex justify-center items-center">
              <Comment postID={post._id} commentDetail={post.comments} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
