import React, { useState } from "react";
import { commentPosts } from "../../../Services/Comment";
import UserComment from "./UserComment/UserComment";
import { IoSend } from "react-icons/io5";
const Comment = ({ postID, commentDetail }) => {
  const [comment, setComment] = useState("");
  console.log(comment);

  const handleComment = () => {
    commentPosts(postID, comment).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div className="w-full bg-white rounded-lg border p-2">
      <h3 className="font-bold">Discussion</h3>
      <form>
        <div className="flex flex-col">
          {commentDetail &&
            commentDetail.map((detail, id) => (
              <UserComment
                key={id}
                avatarUrl="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                userName="Sanchi"
                commentText={detail.commentText}
              />
            ))}
        </div>
        <div className="flex flex-row items-center justify-center w-full p-2 gap-12 border border-gray-400 rounded">
          <textarea
            className=" flex justify-center  leading-normal resize-none w-[90%] h-10   font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            required=""
            defaultValue={""}
          />
          <IoSend onClick={handleComment} className=" cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default Comment;
