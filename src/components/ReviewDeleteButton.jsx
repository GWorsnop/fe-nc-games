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
    <div className="flex justify-center">
      <button
        className={
          error
            ? "px-3 py-2 text-sm text-black bg-red-500 rounded"
            : "px-3 py-2 text-sm text-black bg-white hover:bg-red-500 rounded"
        }
        onClick={handleDelete}
        disabled={disable}
      >
        {error ? "Error: Could not delete review" : "Delete Review"}
      </button>
    </div>
  );
}
