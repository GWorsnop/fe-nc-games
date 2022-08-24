import { useState, useEffect } from "react";

function ExpandCategories({ children }) {
  const [showForm, setShowForm] = useState(false);

  function toggleShow() {
    setShowForm((current) => {
      return !current;
    });
  }

  return (
    <>
      <button
        className="btn bg-white hover:bg-teal-200 text-black text-xs"
        onClick={toggleShow}
      >
        {showForm ? "Hide Form" : "Add Category"}
      </button>

      {showForm ? children : null}
    </>
  );
}

export default ExpandCategories;
