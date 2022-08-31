import { useState } from "react";

function Expandable({ children, comment_count }) {
  const [showComments, setShowComments] = useState(false);

  function toggleShow() {
    setShowComments((current) => {
      return !current;
    });
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="inline-block ml-auto pr-5">
        <button
          className="m-auto btn bg-white hover:bg-teal-500 text-black text-xs"
          onClick={toggleShow}
        >
          {showComments ? "Hide Comments" : `Show ${comment_count} Comments`}
        </button>
      </div>

      {showComments ? children : null}
      {showComments ? (
        <div className="inline-block ml-auto pr-5">
          <button
            className="btn bg-white hover:bg-teal-500 text-black text-xs"
            onClick={toggleShow}
          >
            Hide Comments
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Expandable;
