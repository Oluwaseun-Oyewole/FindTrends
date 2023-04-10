import React from "react";
import { SearchForm } from "./SearchForm";
import { Trends } from "./Trends";
import { Follow } from "./Follow";

export const SearchTrend = () => {
  return (
    <div className="w-[89%] mx-auto">
      <SearchForm />
      <Trends />
      <Follow />
    </div>
  );
};
