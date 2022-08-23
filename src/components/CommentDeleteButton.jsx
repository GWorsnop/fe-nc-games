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
  if (error) {
    return <p>Error: Could not delete comment.</p>;
  } else
    return (
      <>
        <button
          className="justify-self-center text-center w-1/3 rounded-lg btn-blue"
          onClick={handleDelete}
          disabled={disable}
        >
          Delete
        </button>
        {error ? error : null}
      </>
    );
}
