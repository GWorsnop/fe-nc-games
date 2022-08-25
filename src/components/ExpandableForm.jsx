import { useState, useEffect } from "react";

function ExpandForm({ children }) {
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
        {showForm ? "Hide Form" : "Add Item"}
      </button>

      {showForm ? children : null}
    </>
  );
}

export default ExpandForm;
