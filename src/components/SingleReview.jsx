import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";
import getReviewById from "./api-interaction/getReviewById";
import VotesButton from "./VotesButton";
import Comments from "./Comments";
import Expandable from "./Expandable";

function SingleReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [votes, setVotes] = useState([]);
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
        <h3 className="text-xl font-bold"> Reviews: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold">
          Sorry that review could not be found.
        </h3>
        <h3 className="text-xl font-bold"> {error} </h3>
      </div>
    );
  } else
    return (
      <div>
        <div className="grid grid-cols-1 min-w-screen justify-items-center">
          <div
            key={review.review_id}
            className="w-4/5 bg-slate-400 rounded-md shadow-md mb-6 py-4"
          >
            <h3 className="text-2xl font-bold text-black">{review.title}</h3>
            <br />
            <div className="flex justify-evenly text-base">
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
                <b>Date Published:</b>
                {review.created_at}
              </p>
              {/* Add function to sort time*/}
            </div>
            <br />
            <div className="flex justify-evenly align-middle">
              <img
                className="m-auto px-4 pb-2 rounded-3xl max-h-32"
                src={review.review_img_url}
                alt={review.review_id}
              />
              <p className="text-base px-2 text-justify">
                {review.review_body}
              </p>
            </div>
            <div className="flex justify-evenly w-60">
              <VotesButton
                review_id={review.review_id}
                originalVote={review.votes}
              />
            </div>
            <p>{review.comment_count} Comments</p>
            <Expandable>
              <Comments review_id={review.review_id} />
            </Expandable>
          </div>
        </div>
      </div>
    );
}

export default SingleReview;
