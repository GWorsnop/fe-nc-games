import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="m-auto">
      <h3 className="text-xl font-bold">Sorry that page does not exist.</h3>
      <Link to="/">Go to Home </Link>
    </div>
  );
}

export default NotFoundPage;
