import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import postComment from "./api-interaction/postComment";

export default function AddComment({ review_id, commentList, setCommentList }) {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(null);
  const [badComment, setBadComment] = useState(false);

  const handleSubmit = (e) => {
    setErr(null);
    e.preventDefault();
    if (comment.length > 1) {
      postComment(review_id, user.username, comment)
        .then((res) => {
          setCommentList(commentList.concat([res]));
          setComment("");
        })
        .catch((err) => {
          setErr(err.message);
        });
    } else {
      setBadComment(true);
    }
  };

  return (
    <div>
      <form className="w-full p-4">
        <label className="mb-2">
          <label className="text-lg">Add a comment</label>
          <input
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            value={comment}
            onChange={function (e) {
              setComment(e.target.value);
              setBadComment(false);
            }}
          />
        </label>
        <button
          type="submit"
          className="px-3 py-2 text-sm text-black bg-white hover:bg-teal-200 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {badComment ? <p>Please write a comment before submitting</p> : null}
    </div>
  );
}
