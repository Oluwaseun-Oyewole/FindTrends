import React, { useContext } from "react";
import { LeftSection } from "./Left";
import { RightSection } from "./Right";
import styled from "styled-components";
import tw from "twin.macro";
import { MiddleCard } from "./MiddleCard";
import { ModalContext } from "../../../components/store/ModalContext";

const CardContainer = styled.div`
  ${tw`mt-10 flex gap-7 justify-center`}

  // height: 100vh;
  // overflow: auto;
  // overflow-y: scroll;
  // margin: 15px auto;
  // white-space: nowrap;

  > div:first-child {
    flex-basis: 20%;
    // align-self: start;
  }
  > div:nth-child(2) {
    flex-basis: 50%;
  }
  > div:nth-child(3) {
    flex-basis: 30%;
  }

  @media screen and (max-width: 1024px) {
    > div:nth-child(1) {
      // display: none;
      flex-basbs: 20%;
    }

    > div:nth-child(2) {
      // display: none;
      flex-basis: 80%;
    }

    > div:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    > div:nth-child(1) {
      display: none;
    }

    > div:nth-child(2) {
      flex-basis: 80%;
    }

    > div:nth-child(3) {
      display: none;
    }
  }
`;
export const CardSections = () => {
  const { handleModalOpening } = useContext(ModalContext);
  return (
    <CardContainer className="max-w-[1250px] mx-auto">
      <LeftSection />
      <MiddleCard />
      <RightSection />
    </CardContainer>
  );
};
