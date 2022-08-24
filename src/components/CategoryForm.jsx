import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import postCategory from "./api-interaction/postCategory";

export default function CategoryForm({ allCategories, setAllCategories }) {
  const { user } = useContext(UserContext);
  const [postSuccessful, setPostSuccessful] = useState(null);
  const [categorySlug, setCategorySlug] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    postCategory(categorySlug, categoryDesc)
      .then((res) => {
        console.log(res);
        setPostSuccessful("Category posted!");
        setAllCategories(allCategories.concat([res]));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="px-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-60"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Category Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setCategorySlug(event.target.value);
                  setPostSuccessful(null);
                }}
                type="text"
                name="name"
                value={categorySlug}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Category Description:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setCategoryDesc(event.target.value);
                  setPostSuccessful(null);
                }}
                type="text"
                name="description"
                value={categoryDesc}
              />
            </label>
          </div>

          <div className="flex items-center justify-between py-4">
            <button
              className="btn bg-gray-400 hover:bg-gray-500 text-xs"
              type="reset"
              onClick={() => {
                setCategorySlug("");
                setCategoryDesc("");
                setPostSuccessful(null);
              }}
            >
              Reset
            </button>
            <button
              className="btn bg-green-400 hover:bg-green-500 text-xs"
              type="submit"
            >
              Add Category
            </button>
            <p>{error ? error : null}</p>
            <p>{postSuccessful ? postSuccessful : null}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
