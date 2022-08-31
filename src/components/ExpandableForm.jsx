import { useState } from "react";

function ExpandForm({ children, type }) {
  const [showForm, setShowForm] = useState(false);

  function toggleShow() {
    setShowForm((current) => {
      return !current;
    });
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="inline-block m-auto">
        <button
          className="m-auto btn bg-teal-500 hover:bg-teal-300 text-black text-xs"
          onClick={toggleShow}
        >
          {showForm ? "Hide Form" : `Add ${type}`}
        </button>
      </div>
      <div className="m-auto sm:w-3/5">{showForm ? children : null}</div>
    </div>
  );
}

export default ExpandForm;
