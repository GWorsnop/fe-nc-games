import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 min-w-screen justify-items-center">
      <h3 className="text-4xl text-center py-4">
        Sorry that page does not exist
      </h3>
      <button
        className="m-auto btn btn-blue pt-4"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFoundPage;
