import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getReviewByCategory from "./api-interaction/getReviewByCategory";
import VotesButton from "./VotesButton";

function SingleCategory() {
  const { category_slug } = useParams();
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviewByCategory(category_slug)
      .then((data) => {
        setAllReviews(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [category_slug]);

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
          Sorry that category does not exist.
        </h3>
        <Link to="/">
          <button className="btn btn-blue">Go to Home </button>
        </Link>
      </div>
    );
  } else if (allReviews.length === 0) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold">
          Sorry, there are no reviews in this category.
        </h3>
        <Link to="/categories">
          <button className="btn btn-blue">Go back to Categories </button>
        </Link>
        <br />
        <Link to="/">
          <button className="btn btn-blue">Go to Home </button>
        </Link>
      </div>
    );
  } else
    return (
      <div>
        <div className="grid grid-cols-1 min-w-screen justify-items-center">
          {allReviews.map((review, i) => {
            return (
              <div
                key={review.review_id}
                className="w-4/5 bg-slate-400 rounded-md shadow-md mb-6 py-4"
              >
                <Link to={`/reviews/id/${review.review_id}`}>
                  <h3 className="text-2xl font-bold text-black hover:text-teal-400">
                    {review.title}
                  </h3>
                </Link>
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
                <div className="flex justify-between pt-2">
                  <div className="flex justify-evenly w-60">
                    <VotesButton
                      review_id={review.review_id}
                      originalVote={review.votes}
                    />
                  </div>
                  <button
                    className="btn bg-white hover:bg-green-100 text-black text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      //show comments
                    }}
                  >
                    Comments
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default SingleCategory;
