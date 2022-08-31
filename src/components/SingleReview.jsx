import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams, useNavigate } from "react-router-dom";
import getReviewById from "./api-interaction/getReviewById";
import VotesButton from "./VotesButton";
import Comments from "./Comments";
import { formatDate } from "./utils/formatDate";
import ReviewDeleteButton from "./ReviewDeleteButton";
import Loading from "./Loading";

function SingleReview() {
  let navigate = useNavigate();

  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((data) => {
        setReview(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [review_id]);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center"> Review </h3>
        <br />
        <div className="flex justify-center">
          <Loading />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="grid grid-cols-1 min-w-screen justify-items-center">
        <h3 className="text-4xl text-center py-4">
          Sorry that page does not exist
        </h3>
        <button
          className="m-auto btn btn-blue pt-4"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    );
  } else if (review.length === 0) {
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center">Review has been deleted!</h3>
        <button
          className="m-auto btn btn-blue pt-4"
          onClick={() => {
            navigate("/reviews");
          }}
        >
          Go to All Reviews
        </button>
      </div>
    );
  } else
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center"> Review {review.review_id} </h3>
        <br />
        <div className="grid grid-cols-1 min-w-screen justify-items-center">
          <div
            key={review.review_id}
            className="w-4/5 bg-teal-200 rounded-md shadow-md mb-6 py-4"
          >
            <h3 className="text-2xl font-bold text-center text-black">
              {review.title}
            </h3>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 justify-center text-center">
              <p>
                <b>Designer:</b> {review.designer}
              </p>
              <p>
                <b>Category:</b> {review.category}
              </p>
              <p>
                <b>Review by:</b> {review.owner}
              </p>
              {/* Add a link to username*/}
              <p>
                <b>Posted: </b>
                {formatDate(review.created_at)}
              </p>
            </div>
            <br />
            <div className="m-auto flex flex-col justify-center w-full">
              <div className="m-auto flex justify-center md:w-1/2 px-4">
                <img
                  className="m-auto px-4 pb-2 rounded-3xl"
                  src={review.review_img_url}
                  alt={review.review_id}
                />
              </div>
              <div className="m-auto inline-block text-base px-6 text-justify">
                <p>{review.review_body}</p>
              </div>
            </div>
            <div className="flex justify-evenly pt-2 sm:w-2/5 lg:w-1/5">
              <VotesButton
                review_id={review.review_id}
                originalVote={review.votes}
              />
            </div>
            <div className="flex flex-col">
              <Comments
                review_id={review.review_id}
                comment_count={review.comment_count}
              />
            </div>
            <div>
              {review.owner === user.username ? (
                <ReviewDeleteButton
                  review={review}
                  reviewList={[review]}
                  setReviewList={setReview}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleReview;
