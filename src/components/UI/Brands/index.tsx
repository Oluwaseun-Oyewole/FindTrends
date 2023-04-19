import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../..";

const BrandsContainer = styled.div`
  ${tw`md:py-3 py-5 md:pb-20 flex flex-col items-center justify-center`}
`;
const Brand = styled.div`
  ${tw`bg-white text-black`}
`;
const BrandsHeader = styled.h1`
  ${tw`pb-4 md:py-10 text-center md:text-left text-xl md:text-left md:text-4xl font-bold`}
`;

export const Brands = () => {
  return (
    <Brand>
      <Container>
        <BrandsContainer>
          <BrandsHeader>Findtrend make +1000 Startup grow</BrandsHeader>
          <img src="/assets/img/Brands (1).png" alt="" className="w-[55%]" />
        </BrandsContainer>
      </Container>
    </Brand>
  );
};
