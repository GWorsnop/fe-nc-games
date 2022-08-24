import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { useState } from "react";

function NavigatePages({
  searchParams,
  setSearchParams,
  allReviews,
  total_count,
}) {
  const [error, setError] = useState(null);
  const [page, setPage] = useState(Number(searchParams.get("p")));

  function NextPage() {
    searchParams.set("p", Number(searchParams.get("p")) + 1);
    setSearchParams(searchParams);
  }

  function PrevPage() {
    searchParams.set("p", Number(searchParams.get("p")) - 1);
    setSearchParams(searchParams);
  }

  return (
    <>
      <button onClick={PrevPage} className={page === 1 ? "hidden" : ""}>
        <ArrowLeftIcon className="h-7 w-7 rounded-full" />
      </button>
      <button
        onClick={NextPage}
        className={total_count <= page * 10 ? "hidden" : ""}
      >
        <ArrowRightIcon className="h-7 w-7 rounded-full" />
      </button>
      <p>
        <b>Total Reviews: </b> {total_count}
      </p>
      <p>
        <b>Viewing: </b> {(page - 1) * 10 + 1} -{" "}
        {total_count > page * 10 ? page * 10 : total_count}
      </p>
      <p className={error ? "text-base" : "hidden"}>
        Error: Could not change page.
      </p>
    </>
  );
}

export default NavigatePages;