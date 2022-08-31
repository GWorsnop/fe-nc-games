import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import getReviews from "./api-interaction/getReviews";
import VotesButton from "./VotesButton";
import Comments from "./Comments";
import FilterSearch from "./FilterSearch";
import { useSearchParams } from "react-router-dom";
import NavigatePages from "./NavigatePages";
import { formatDate } from "./utils/formatDate";
import ExpandForm from "./ExpandableForm";
import ReviewForm from "./ReviewForm";
import ReviewDeleteButton from "./ReviewDeleteButton";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function Reviews() {
  let navigate = useNavigate();
  const [allReviews, setAllReviews] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);
  const type = "Review";

  useEffect(() => {
    setIsLoading(true);
    getReviews({
      order: searchParams.get("order"),
      sort_by: searchParams.get("sort_by"),
      category: searchParams.get("category"),
      limit: searchParams.get("limit"),
      p: searchParams.get("p"),
    })
      .then((data) => {
        setAllReviews(data);
        setIsLoading(false);
        setTotal(data ? data[0].total_count : 0);
        if (searchParams.get("p") === null) {
          searchParams.set("p", 1);
        }
        if (searchParams.get("limit") === null) {
          searchParams.set("limit", 10);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center"> Reviews </h3>
        <br />
        <div className="flex justify-center">
          <Loading />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="m-auto flex flex-col justify-center">
        <h3 className="text-4xl text-center"> Reviews </h3>
        <br />
        <h3 className="text-2xl text-center">
          This category currently has no reviews
        </h3>
        <br />
        <div className="m-auto flex justify-center">
          <button
            className="btn btn-blue"
            onClick={() => {
              setError(null);
              searchParams.set("category", null);
              navigate("/reviews");
            }}
          >
            All Reviews{" "}
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center"> Reviews </h3>
        <br />
        <>
          <ExpandForm type={type}>
            <ReviewForm allReviews={allReviews} setAllReviews={setAllReviews} />
          </ExpandForm>
        </>
        <>
          <FilterSearch
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            allReviews={allReviews}
          />
        </>
        <div className="grid grid-cols-1 min-w-screen justify-items-center pt-2">
          {allReviews.map((review, i) => {
            return (
              <div
                key={review.review_id}
                className="w-4/5 bg-teal-200 rounded-md shadow-md mb-6 py-4"
              >
                <Link to={`/reviews/id/${review.review_id}`}>
                  <h3 className="text-2xl font-bold text-center text-black hover:text-teal-500 hover:underline px-2">
                    {review.title}
                  </h3>
                </Link>
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
                  <p>
                    <b>Date Published: </b>
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
                      reviewList={allReviews}
                      setReviewList={setAllReviews}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <NavigatePages
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          allReviews={allReviews}
          total_count={total}
        />
      </div>
    );
}

export default Reviews;
