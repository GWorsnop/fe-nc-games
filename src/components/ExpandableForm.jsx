import { useState } from "react";

function ExpandForm({ children, type }) {
  const [showForm, setShowForm] = useState(false);

  function toggleShow() {
    setShowForm((current) => {
      return !current;
    });
  }

  return (
    <>
      <button
        className="btn bg-teal-200 hover:bg-teal-500 text-black text-xs"
        onClick={toggleShow}
      >
        {showForm ? "Hide Form" : `Add ${type}`}
      </button>

      {showForm ? children : null}
    </>
  );
}

export default ExpandForm;
