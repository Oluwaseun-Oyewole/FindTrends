import React from "react";
import { Container } from "../..";
import styled from "styled-components";
import tw from "twin.macro";

const SectionTabContainer = styled.div`
  ${tw`py-10  font-medium bg-secondary`}
`;
const SectionContainer = styled.div`
  ${tw`pt-7 flex items-center justify-center text-center`}
`;
const SectionTabHeader = styled.h1`
  ${tw`text-6xl text-black font-bold tracking-wide`}
`;

const SectionContent = styled.div`
  ${tw` py-14 flex items-center justify-center gap-5`}
`;
const SectionImageContainer = styled.div`
  ${tw`bg-white rounded-lg h-[170px] w-[400px] flex items-center justify-center px-10 `}
`;
const SectionImage = styled.img``;
const SectionParagraphContainer = styled.div`
  ${tw` flex items-center justify-center`}
`;
const SectionParagraph = styled.p`
  ${tw`text-black flex items-center justify-center w-[65%] font-medium font-Quicksand`}
`;
export const SectionTab = () => {
  return (
    <SectionTabContainer>
      <Container>
        <SectionContainer>
          <SectionTabContainer>
            <SectionTabHeader>Open new tabs is sh*t</SectionTabHeader>

            <SectionContent>
              <img src="/assets/img/Group 427321657.png" alt="" />
              <SectionImageContainer>
                <SectionImage src="/assets/img/Group 15.png" />
              </SectionImageContainer>
              <img src="/assets/img/Group 427321665.png" alt="" />
            </SectionContent>

            <SectionParagraphContainer>
              <SectionParagraph>
                A solution for your browser tabs and don’t make your device get
                slower over time. Get ease and faster to discover a trend with
                just one tab.
              </SectionParagraph>
            </SectionParagraphContainer>
          </SectionTabContainer>
        </SectionContainer>
      </Container>
    </SectionTabContainer>
  );
};
