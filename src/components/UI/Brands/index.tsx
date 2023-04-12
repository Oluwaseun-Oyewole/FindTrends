import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../..";

const BrandsContainer = styled.div`
  ${tw` py-10 pb-20 flex flex-col items-center justify-center`}
`;
const Brand = styled.div`
  ${tw`bg-white text-black`}
`;
const BrandsHeader = styled.h1`
  ${tw`py-10 text-4xl font-bold`}
`;

const TrendHeader = styled.h2`
  ${tw` pt-20 pb-32 text-4xl text-gray-400 font-bold font-satoshi w-[50%]`}
`;
export const Brands = () => {
  return (
    <Brand>
      <Container>
        <BrandsContainer>
          {/* <TrendHeader>
            Findtrend helps you to increase your productivity and reduce your
            computer's memory load, an application that can fulfill your daily
            browsing needs.
          </TrendHeader> */}
          <BrandsHeader>Findtrend make +1000 Startup grow</BrandsHeader>
          <img src="/assets/img/Brands (1).png" alt="" className="w-[55%]" />
        </BrandsContainer>
      </Container>
    </Brand>
  );
};
