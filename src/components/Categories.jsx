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
        <div className="pb-8">
          <ExpandForm>
            <CategoryForm
              allCategories={allCategories}
              setAllCategories={setAllCategories}
            />
          </ExpandForm>
          <br />
        </div>
        <div className="grid gap-4 grid-cols-4 grid-rows-1 justify-items-center">
          {allCategories.map((category, i) => {
            return (
              <div
                key={category.slug}
                className="w-60 h-40 bg-gray-200 rounded-md shadow-md mb-4"
              >
                <h3 className="text-2xl font-semibold text-black pb-2">
                  {category.slug}
                </h3>
                <h3 className="text-xs font-semibold px-2 text-black">
                  {category.description}
                </h3>
                <Link to={`/reviews/category/${category.slug}`}>
                  <button className="btn bg-white hover:bg-teal-200 text-black text-xs py-2 align-baseline">
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
