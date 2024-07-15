import React from 'react'

const UserComment = ({ avatarUrl, userName, commentText }) => {
  return (
    <div>
         <div className="border rounded-md p-3 ml-3 my-3">
        <div className="flex gap-3 items-center">
          <img
            src={avatarUrl}
            className="object-cover w-8 h-8 rounded-full 
                      border-2 border-emerald-400  shadow-emerald-400
                      "
          />
          <h3 className="font-bold">{userName}</h3>
        </div>
        <p className="text-gray-600 mt-2">{commentText}</p>
      </div>
    </div>
  )
}

export default UserComment