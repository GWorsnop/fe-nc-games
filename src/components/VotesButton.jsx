import {
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import changeVotes from "./api-interaction/changeVotes";

function VotesButton({ review_id, originalVote }) {
  const [increased, setIncreased] = useState(false);
  const [decreased, setDecreased] = useState(false);
  const [votes, setVotes] = useState(originalVote);
  const [error, setError] = useState(null);

  function upVote() {
    if (increased) {
      setVotes((oldVote) => {
        return oldVote - 1;
      });
      changeVotes(review_id, -1)
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
      changeVotes(review_id, 1)
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
      changeVotes(review_id, -1)
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
      changeVotes(review_id, 1)
        .then(() => {
          setDecreased(true);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }

  return (
    <>
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
    </>
  );
}

export default VotesButton;
