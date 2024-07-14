import React from 'react'
import UserComment from './UserComment/UserComment'
import { IoSend } from "react-icons/io5";
const Comment = () => {
  return (
    <div className="w-full bg-white rounded-lg border p-2">
  <h3 className="font-bold">Discussion</h3>
  <form>
    <div className="flex flex-col">
        <UserComment
         avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
         userName="Sanchi"
         commentText="Nice outfit."
         />
    </div>
    <div className="flex flex-row items-center w-full px-3 my-2 gap-12">
      <textarea
        className=" bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-[90%] h-10  px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
        name="body"
        placeholder="Type Your Comment"
        required=""
        defaultValue={""}
      />
      
      <IoSend />
     
    </div>
    
  </form>
</div>

  )
}

export default Comment