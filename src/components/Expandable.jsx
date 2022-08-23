import { useState, useEffect } from "react";

function Expandable({ children }) {
  const [showComments, setShowComments] = useState(false);

  function toggleShow() {
    setShowComments((current) => {
      return !current;
    });
  }

  return (
    <>
      <button
        className="btn bg-white hover:bg-teal-200 text-black text-xs"
        onClick={toggleShow}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments ? children : null}
      {showComments ? (
        <button
          className="btn bg-white hover:bg-teal-200 text-black text-xs"
          onClick={toggleShow}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      ) : null}
    </>
  );
}

export default Expandable;
