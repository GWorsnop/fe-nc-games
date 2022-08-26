import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import getCategories from "./api-interaction/getCategories";
import ExpandForm from "./ExpandableForm";
import CategoryForm from "./CategoryForm";

function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const type = "Category";

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((data) => {
      setAllCategories(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold"> Categories: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="flex flex-col m-auto justify-center w-1/5">
          <h2 className="flex flex-row text-4xl justify-center">Categories</h2>
        </div>
        <div className="grid grid-col justify-end pr-10 pb-2">
          <ExpandForm type={type} className="flex justify-end">
            <CategoryForm
              allCategories={allCategories}
              setAllCategories={setAllCategories}
            />
          </ExpandForm>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 justify-items-center">
          {allCategories.map((category, i) => {
            return (
              <div
                key={category.slug}
                className="flex flex-col w-60 min-h-40 bg-teal-200 rounded-md shadow-md mb-4 text-center"
              >
                <h3 className="text-xl font-semibold text-black pb-2">
                  {category.slug}
                </h3>
                <h3 className="text-sm px-2 text-black">
                  {category.description}
                </h3>
                <Link
                  to={`/reviews/category/${category.slug}`}
                  className="mt-auto"
                >
                  <button className=" btn bg-white hover:bg-teal-500 text-black text-xs py-2">
                    View reviews
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Categories;
