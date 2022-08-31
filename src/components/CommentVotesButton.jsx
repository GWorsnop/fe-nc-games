import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import changeCommentVotes from "./api-interaction/changeCommentVotes";

function CommentVotesButton({ comment_id, originalVote }) {
  const [increased, setIncreased] = useState(false);
  const [decreased, setDecreased] = useState(false);
  const [votes, setVotes] = useState(originalVote);
  const [error, setError] = useState(null);

  function upVote() {
    if (increased) {
      setVotes((oldVote) => {
        return oldVote - 1;
      });
      changeCommentVotes(comment_id, -1)
        .then(() => {
          setIncreased(false);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setVotes((oldVote) => {
        return oldVote + 1;
      });
      changeCommentVotes(comment_id, 1)
        .then(() => {
          setIncreased(true);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }

  function downVote() {
    if (decreased) {
      setVotes((oldVote) => {
        return oldVote + 1;
      });
      changeCommentVotes(comment_id, -1)
        .then(() => {
          setDecreased(false);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setVotes((oldVote) => {
        return oldVote - 1;
      });
      changeCommentVotes(comment_id, 1)
        .then(() => {
          setDecreased(true);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }

  return (
    <div className="flex md:w-2/5 lg:w-1/5 justify-evenly">
      <button onClick={upVote} disabled={decreased}>
        <ArrowCircleUpIcon
          className={
            increased
              ? "h-7 w-7 rounded-full bg-green-600"
              : "h-7 w-7 rounded-full"
          }
        />
      </button>
      <button onClick={downVote} disabled={increased}>
        <ArrowCircleDownIcon
          className={
            decreased
              ? "h-7 w-7 rounded-full bg-red-600"
              : "h-7 w-7 rounded-full"
          }
        />
      </button>
      <p>
        <b>Votes:</b> {votes}
      </p>
      <p className={error ? "text-base" : "hidden"}>
        Error: Could not update votes.
      </p>
    </div>
  );
}

export default CommentVotesButton;
