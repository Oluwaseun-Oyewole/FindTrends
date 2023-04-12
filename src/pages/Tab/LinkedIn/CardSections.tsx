import React from "react";
import { LeftSection } from "./Left";
import { RightSection } from "./Right";
import styled from "styled-components";
import tw from "twin.macro";
import { MiddleCard } from "./MiddleCard";

const CardContainer = styled.div`
  ${tw`mt-5 flex gap-5 justify-center`}
  >div:first-child {
    flex-basis: 20%;
    // align-self: start;
  }
  > div:nth-child(2) {
    flex-basis: 60%;
  }
  > div:nth-child(3) {
    flex-basis: 20%;
  }
`;
export const CardSections = () => {
  return (
    <CardContainer className="max-w-[1300px] mx-auto ">
      <LeftSection />
      <MiddleCard />
      <RightSection/>
    </CardContainer>
  );
};
