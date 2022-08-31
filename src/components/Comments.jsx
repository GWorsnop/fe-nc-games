import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import getComments from "./api-interaction/getComments";
import CommentVotesButton from "./CommentVotesButton";
import getUsers from "./api-interaction/getUsers";
import AddComment from "./AddComment";
import CommentDeleteButton from "./CommentDeleteButton";
import Expandable from "./Expandable";
import { formatDate } from "./utils/formatDate";

function Comments({ review_id, comment_count }) {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [commented, setCommented] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((data) => {
      setCommentList(data);
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
        <Expandable comment_count={comment_count}>
          {commentList.map((comment, i) => {
            let userUrl = "";
            users.forEach((item) => {
              if (item.username === comment.author) {
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
                    alt={comment.author}
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between">
                      <p className="relative text-l whitespace-nowrap truncate overflow-hidden">
                        {comment.author}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {formatDate(comment.created_at)}
                    </p>
                  </div>
                </div>
                <p className="-mt-4 text-gray-500 text-xl text-center">
                  {comment.body}
                </p>
                <CommentVotesButton
                  comment_id={comment.comment_id}
                  originalVote={comment.votes}
                />
                {comment.author === user.username ? (
                  <CommentDeleteButton
                    comment={comment}
                    commentList={commentList}
                    setCommentList={setCommentList}
                  />
                ) : null}
              </div>
            );
          })}
        </Expandable>
        <AddComment
          review_id={review_id}
          commentList={commentList}
          setCommentList={setCommentList}
          setCommented={setCommented}
        />
        {commented ? <p>Comment added!</p> : null}
      </>
    );
}

export default Comments;
