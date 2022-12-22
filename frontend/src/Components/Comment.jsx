import React from "react";
import "../css/Comment.css";

const Comment = ({ comment }) => {
  console.log(comment);

  return (
    <>
      <div className="commentDiv">
        <p>・{comment.Body}</p>
      </div>
    </>
  );
};

export default Comment;
