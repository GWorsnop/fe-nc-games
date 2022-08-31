import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import postComment from "./api-interaction/postComment";

export default function AddComment({
  review_id,
  commentList,
  setCommentList,
  setCommented,
}) {
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
          setCommented(true);
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
              setCommented(false);
              setComment(e.target.value);
              setBadComment(false);
            }}
          />
        </label>
        <div className="flex justify-end py-2">
          <button
            type="submit"
            className={
              badComment
                ? "flex flex-end px-3 py-2 text-sm text-black bg-red-500 rounded"
                : "flex flex-end px-3 py-2 text-sm text-black bg-white hover:bg-teal-500 rounded"
            }
            onClick={handleSubmit}
          >
            {badComment ? "Please write a comment before submitting" : "Submit"}
          </button>
        </div>
      </form>

      {err ? <p>Something went wrong, comment not posted.</p> : null}
    </div>
  );
}
