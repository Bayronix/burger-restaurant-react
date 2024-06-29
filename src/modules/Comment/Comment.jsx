import CommentSubmit from "../Comment/CommentSubmitComponent/CommentSubmit";
import CommentList from "./CommentListComponent/CommentList";
import { useState } from "react";
import CommentListJson from "./CommentListComponent/CommentList.json";

const Comment = () => {
  const [comments, setComments] = useState(CommentListJson);

  const handleAddComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
      <CommentSubmit onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </>
  );
};

export default Comment;
