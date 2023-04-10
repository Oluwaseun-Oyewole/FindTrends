import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`max-w-[1440px] w-full mx-auto`}

  @media screen and (max-width:960px) {
    ${tw`px-5`}
  }
`;
