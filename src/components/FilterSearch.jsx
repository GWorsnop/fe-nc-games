import { useState, useEffect } from "react";
import getCategories from "./api-interaction/getCategories";

export default function FilterSearch({
  searchParams,
  setSearchParams,
  allReviews,
}) {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setAllCategories(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p></p>;
  } else
    return (
      <div className="flex flex-col justify-center pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  m-auto text-sm bg-teal-200 py-1 px-2 rounded-md">
          <label htmlFor="category">Category: </label>
          <select
            className="text-sm"
            id="category"
            name="category"
            defaultValue={searchParams.get("category")}
            onChange={(e) => {
              searchParams.set("category", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="">All</option>
            {allCategories.map((category, i) => {
              return (
                <option key={category.slug} value={category.slug}>
                  {category.slug}
                </option>
              );
            })}
          </select>
          <label className="pl-2 text-sm" htmlFor="sort_by">
            Sort By:{" "}
          </label>
          <select
            className="text-sm"
            id="sort_by"
            name="sort_by"
            defaultValue={searchParams.get("sort_by")}
            onChange={(e) => {
              searchParams.set("sort_by", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="created_at">Time of Review</option>
            <option value="review_id">ID</option>
            <option value="designer">Designer</option>
            <option value="owner">Owner</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
          <label className="pl-2 text-sm" htmlFor="order">
            Sort Order:{" "}
          </label>
          <select
            className="text-sm"
            id="order"
            name="order"
            defaultValue={searchParams.get("order")}
            onChange={(e) => {
              searchParams.set("order", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
          <label className="pl-2 text-sm" htmlFor="order">
            Reviews per Page:{" "}
          </label>
          <select
            className="text-sm"
            id="limit"
            name="limit"
            defaultValue={
              searchParams.get("limit") ? searchParams.get("limit") : 10
            }
            onChange={(e) => {
              searchParams.set("limit", e.target.value);
              setSearchParams(searchParams);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="100">All</option>
          </select>
          {allReviews.length === 0 ? (
            <div className="m-auto">
              <h3 className="text-xl font-bold">
                Sorry, there are no reviews in this category.
              </h3>
            </div>
          ) : null}
        </div>
      </div>
    );
}
