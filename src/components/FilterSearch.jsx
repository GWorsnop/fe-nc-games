import { useState } from "react";

export default function FilterSearch({ searchParams, setSearchParams }) {
  return (
    <div className="pb-2 text-sm">
      <label htmlFor="category">Category: </label>
      <select
        className="text-sm"
        id="category"
        name="category"
        defaultValue={searchParams.get("category")}
        onChange={(e) => {
          searchParams.set("category", e.target.value);
          setSearchParams(searchParams);
        }}
      >
        <option value="">All</option>
        <option value="strategy">Strategy</option>
        <option value="hidden-roles">Hidden Roles</option>
        <option value="dexterity">Dexterity</option>
        <option value="push-your-luck">Push your Luck</option>
        <option value="roll-and-write">Roll and Write</option>
        <option value="deck-building">Deck Building</option>
        <option value="engine-building">Engine Building</option>
      </select>
      <label className="pl-2 text-sm" htmlFor="sort_by">
        Sort By:{" "}
      </label>
      <select
        className="text-sm"
        id="sort_by"
        name="sort_by"
        defaultValue={searchParams.get("sort_by")}
        onChange={(e) => {
          searchParams.set("sort_by", e.target.value);
          setSearchParams(searchParams);
        }}
      >
        <option value="review_id">ID</option>
        <option value="designer">Designer</option>
        <option value="owner">Owner</option>
        <option value="created_at">Time of Review</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
      <label className="pl-2 text-sm" htmlFor="order">
        Sort Order:{" "}
      </label>
      <select
        className="text-sm"
        id="order"
        name="order"
        defaultValue={searchParams.get("order")}
        onChange={(e) => {
          searchParams.set("order", e.target.value);
          setSearchParams(searchParams);
        }}
      >
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  );
}
