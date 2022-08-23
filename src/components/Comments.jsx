import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import getComments from "./api-interaction/getComments";
import CommentVotesButton from "./CommentVotesButton";
import getUsers from "./api-interaction/getUsers";

function Comments({ review_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [review_id]);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold"> Comments: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <>
        {comments.map((comment, i) => {
          let userUrl = "";
          users.forEach((item) => {
            if (item.username == comment.author) {
              userUrl = item.avatar_url;
            }
          });

          return (
            <div
              key={comment.comment_id}
              className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg"
            >
              <div className="relative flex gap-4">
                <img
                  src={userUrl}
                  className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                  alt="placeholder"
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                      {comment.author}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm">{comment.created_at}</p>
                </div>
              </div>
              <p className="-mt-4 text-gray-500">{comment.body}</p>
              <CommentVotesButton
                comment_id={comment.comment_id}
                originalVote={comment.votes}
              />
            </div>
          );
        })}
      </>
    );
}

export default Comments;
