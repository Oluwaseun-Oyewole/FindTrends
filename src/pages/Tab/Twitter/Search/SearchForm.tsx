import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { CiSearch } from "react-icons/ci";

const SearchFormContainer = styled.form`
  ${tw`relative`}
`;
const Search = styled.div`
  ${tw`sticky top-0 h-[50px] mb-5`}
`;
export const SearchForm = () => {
  const [showModal, setshowModal] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    setshowModal(true);
    setClick(true);
  };

  return (
    <Search>
      <SearchFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          setSearch("");
          setshowModal(false);
        }}
      >
        <input
          type="text"
          // name="search"
          id=""
          placeholder="Search Twitter"
          className={`w-[100%] bg-gray-100 shadow-sm outline-none h-[50px] rounded-3xl placeholder:text-sm placeholder:text-black placeholder:opacity-50 pl-14 text-black ${
            click && "border-[1.5px]"
          } border-twitter`}
          onClick={handleClick}
          onMouseLeave={() => {
            setshowModal(false);
            setClick(false);
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch
          className={`absolute top-[18px] left-3 text-xl ${
            click && "text-twitter"
          }`}
        />

        {showModal && (
          <div className="bg-white shadow-2xl h-[100px] w-[110%] rounded-lg mt-5 text-sm text-center tracking-wide absolute pt-5">
            <p>Try searching for people, topics, or keywords</p>
          </div>
        )}
      </SearchFormContainer>
    </Search>
  );
};
