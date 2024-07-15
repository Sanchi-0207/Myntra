import React, { useEffect, useState } from 'react'
import { GetPosts } from '../../Services/GetPost'
import Post from './Posts/Post'
function Community() {
const [posts ,setPosts]=useState()
const[user , setUser]=useState();

useEffect(() => {
     GetPosts().then((res)=>{
      setPosts(res.data);
      setUser(res.user);
     })
} , []);
console.log(posts)

  return (
    <div className="flex flex-col py-4 gap-4">
      {posts  && posts.map((post, id) => (
        <Post isLiked={user!==undefined ? user.likedPosts.includes(post._id):false } post={post} />
      ))}
     
    </div>
  );
}

export default Community