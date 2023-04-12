import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../Button";
import { Container } from "../..";

const JoinHeading = styled.h1`
  ${tw`py-3 text-5xl font-bold`}
`;
const JoinHeading2 = styled.h2`
  ${tw`pt-2 pb-10 text-6xl opacity-30 font-bold`}
`;
const JoinContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;
const Join = styled.div`
  ${tw`mt-20 py-32 bg-secondary text-black`}
`;
export const JoinUs = () => {
  return (
    <Join>
      <Container>
        <JoinContainer>
          <JoinHeading>Join us on email for </JoinHeading>
          <JoinHeading2>more trending topics</JoinHeading2>
          <Button
            children="Join Now"
            padding={true}
            paddingvalues="10px 40px"
          />
        </JoinContainer>
      </Container>
    </Join>
  );
};
