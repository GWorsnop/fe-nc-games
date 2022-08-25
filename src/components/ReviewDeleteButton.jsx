import { useState } from "react";
import deleteReview from "./api-interaction/deleteReview";

export default function ReviewDeleteButton({
  review,
  reviewList,
  setReviewList,
}) {
  const { review_id } = review;
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

  function handleDelete(e) {
    setError(null);
    setDisable(true);
    deleteReview(review_id)
      .then(() => {
        setDisable(false);
        const indexOfReview = reviewList.findIndex(
          (i) => i.review_id === review.review_id
        );
        const clone = structuredClone(reviewList);
        clone.splice(indexOfReview, 1);
        setReviewList(clone);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }
  return (
    <>
      <button
        className="justify-self-center text-center w-1/3 rounded-lg btn-blue"
        onClick={handleDelete}
        disabled={disable}
      >
        Delete
      </button>
      {error ? <p>Error: Could not delete review.</p> : null}
    </>
  );
}
