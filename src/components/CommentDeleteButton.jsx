import { useState } from "react";
import deleteComment from "./api-interaction/deleteComment";

export default function CommentDeleteButton({
  comment,
  commentList,
  setCommentList,
}) {
  const { comment_id } = comment;
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

  function handleDelete(e) {
    setError(null);
    setDisable(true);
    deleteComment(comment_id)
      .then(() => {
        setDisable(false);
        const indexOfComment = commentList.findIndex(
          (i) => i.comment_id === comment.comment_id
        );
        const clone = structuredClone(commentList);
        clone.splice(indexOfComment, 1);
        setCommentList(clone);
      })
      .catch((err) => {
        setError(err);
      });
  }
  return (
    <div className="flex justify-center">
      <button
        className={
          error
            ? "px-3 py-2 text-sm text-black bg-red-500 rounded"
            : "px-3 py-2 text-sm text-black bg-teal-200 hover:bg-red-500 rounded"
        }
        onClick={handleDelete}
        disabled={disable}
      >
        {error ? "Error: Could not delete Comment" : "Delete Comment"}
      </button>
    </div>
  );
}
