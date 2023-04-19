import React from "react";
import { Container } from "../..";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../Button";
import { AiTwotoneFire } from "react-icons/ai";

const HeroParent = styled.div`
  // ${tw`font-Quicksand`}
`;

const HeroContainer = styled.div`
  ${tw`pt-14 flex flex-col items-center justify-center gap-[50px] lg:gap-[65px] md:pb-14`}
`;
const HeroContent = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;
const HeroContentHeading = styled.h1`
  ${tw`text-3xl md:text-5xl lg:text-7xl py-4 font-[900] tracking-wide`}
`;
const HeroContentHading2 = styled.h2`
  ${tw`text-3xl md:text-5xl lg:text-6xl font-extrabold pb-5 tracking-wide`}
`;

const HeroContentParagraph = styled.p`
  ${tw`text-body font-medium w-[95%] md:w-[70%] lg:w-[58%] pt-2 pb-8 text-center lg:text-start font-Quicksand`}
`;

const HeroImageContainer = styled.div``;
const HeroDesktopImage = styled.img`
  ${tw`hidden lg:block`}
`;

const HeroMobileImage = styled.img`
  ${tw`lg:hidden py-3 pb-10`}
`;

const ButtonImageContainer = styled.div`
  ${tw`flex items-center gap-5`}
`;

const ButtonImage = styled.img`
  ${tw`hidden lg:block`}
`;
export const Hero = () => {
  return (
    <HeroParent>
      <Container>
        <HeroContainer>
          <HeroContent>
            <HeroContentHeading>Minimize your tabs.</HeroContentHeading>
            <HeroContentHading2>Find the trends!</HeroContentHading2>
            <HeroContentParagraph>
              Don’t let your computer memories consumes all of those browser
              tabs. Findtrend let you gathers all of your favorite website into
              one place.
            </HeroContentParagraph>

            <ButtonImageContainer>
              <Button
                children="Get Started"
                onClick={() => null}
                icon={<AiTwotoneFire color="red" />}
                background="#A8FF35"
                color="#000"
                fontWeight={900}
                padding={true}
                paddingvalues="14px 35px"
                fontSize={true}
              />
              <ButtonImage src="/assets/img/img-hero.png" alt="button image" />
            </ButtonImageContainer>
          </HeroContent>

          <HeroImageContainer>
            <HeroDesktopImage
              src="/assets/img//btn-hero-socmed (1).png"
              alt="Hero Desktop image"
            />

            <HeroMobileImage
              src="/assets/img/Group 427321666.png"
              alt="Hero Mobile Image"
            />
          </HeroImageContainer>
        </HeroContainer>
      </Container>
    </HeroParent>
  );
};
