import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import postReview from "./api-interaction/postReview";
import getCategories from "./api-interaction/getCategories";

export default function ReviewForm({ allReviews, setAllReviews }) {
  const { user } = useContext(UserContext);
  const [postSuccessful, setPostSuccessful] = useState(null);
  const [owner] = useState(user.username);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setAllCategories(data);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    postReview(owner, title, body, designer, category)
      .then((res) => {
        setPostSuccessful("Review posted!");
        setAllReviews([res].concat(allReviews));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="px-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Title:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setTitle(event.target.value);
                  setError(null);
                  setPostSuccessful(null);
                }}
                type="text"
                name="title"
                value={title}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Designer:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setDesigner(event.target.value);
                  setError(null);
                  setPostSuccessful(null);
                }}
                type="text"
                name="designer"
                value={designer}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Category:
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setCategory(event.target.value);
                  setError(null);
                  setPostSuccessful(null);
                }}
                name="category"
              >
                <option value="">Choose a category</option>
                {allCategories.map((category, i) => {
                  return <option value={category.slug}>{category.slug}</option>;
                })}
              </select>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Review Body:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setBody(event.target.value);
                  setError(null);
                  setPostSuccessful(null);
                }}
                type="text"
                name="body"
                value={body}
              />
            </label>
          </div>

          <div className="flex items-center justify-between py-4">
            <button
              className="btn bg-slate-400 hover:bg-slate-300 text-xs"
              type="reset"
              onClick={() => {
                setTitle("");
                setDesigner("");
                setCategory(null);
                setBody("");
                setError(null);
                setPostSuccessful(null);
              }}
            >
              Reset
            </button>
            <p className="text-sm">
              {error ? "Please fill out all fields." : null}
            </p>
            <p className="text-sm">{postSuccessful ? postSuccessful : null}</p>
            <button
              className="btn bg-teal-200 hover:bg-teal-300 text-xs"
              type="submit"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
