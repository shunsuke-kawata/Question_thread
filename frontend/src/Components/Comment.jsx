import React from "react";

const Comment = ({ comment, key }) => {
  console.log(comment, key);

  return (
    <>
      <div className="commentDiv">
        <p>・{comment.Body}</p>
      </div>
    </>
  );
};

export default Comment;
