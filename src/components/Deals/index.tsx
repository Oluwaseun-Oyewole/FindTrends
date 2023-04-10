import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "..";
import { Card } from "./Card";

const DealContainer = styled.div`
  ${tw`pt-28 flex flex-col items-center justify-center`}
`;
const DealParentComponent = styled.div`
  ${tw`font-satoshi font-medium  bg-black`}
`;

const DealsHeading = styled.h1`
  ${tw`text-5xl font-bold pb-5`}
`;
const Switcher = styled.div<{ click?: boolean }>`
  ${tw`flex items-center justify-center gap-3 text-sm`}

  div:nth-child(2) {
    ${tw`bg-white h-[40px] w-[90px] rounded-full flex items-center pl-2`}

    span {
      ${tw`bg-secondary h-[30px] w-[30px] block rounded-full transition-all duration-500 ease-in-out cursor-pointer`}
      position: relative;
      margin-left: ${({ click }) => click && "40px"};
    }
  }
`;

const Yearly = styled.div`
  ${tw`flex items-center justify-center gap-2 text-body`}
`;

export const Deals = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <DealParentComponent>
      <Container>
        <DealContainer>
          <div>
            <DealsHeading>Get your best deal</DealsHeading>
            <Switcher click={click} onClick={handleClick}>
              <p>Monthly</p>
              <div>
                <span></span>
              </div>
              <Yearly>
                <p>Yearly</p>
                <img src="/assets/img/img-hero.png" alt="" />
              </Yearly>
            </Switcher>
          </div>
          <Card click={click} />
        </DealContainer>
      </Container>
    </DealParentComponent>
  );
};
