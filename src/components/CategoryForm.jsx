import { useState } from "react";
import postCategory from "./api-interaction/postCategory";

export default function CategoryForm({ allCategories, setAllCategories }) {
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
    <div className="flex flex-col justify-center">
      <div className="px-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Category Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setCategorySlug(event.target.value);
                  setError(null);
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
                className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setCategoryDesc(event.target.value);
                  setError(null);
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
              className="btn bg-slate-400 hover:bg-slate-300 text-xs"
              type="reset"
              onClick={() => {
                setCategorySlug("");
                setCategoryDesc("");
                setError(null);
                setPostSuccessful(null);
              }}
            >
              Reset
            </button>
            <p className="text-sm">{postSuccessful ? postSuccessful : null}</p>
            <button
              className={
                error
                  ? "btn bg-red-500 text-sm text-black rounded"
                  : "btn bg-teal-200 hover:bg-teal-500 text-sm text-black rounded"
              }
              type="submit"
            >
              {error ? "Please fill out all fields" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
