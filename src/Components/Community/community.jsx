import React from 'react'
import Post from './Posts/Post'
function Community() {
  return (
    <div className='flex flex-col py-4 gap-4'>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Community