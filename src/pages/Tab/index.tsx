import React from "react";
import { CustomTabComponent } from "../../components/Tab";
import { FaceBook } from "./Facebook";
import { Twitter } from "./Twitter";
import { Pinteres } from "./Pinteres";
import { LinkedInn } from "./LinkedIn";
import { Gmail } from "./Gmail";
import styled from "styled-components";
import tw from "twin.macro";
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const TabContainer = styled.div`
  ${tw`bg-gray-50 text-black font-satoshi font-medium pb-20`}
`;

const TabHeader = styled.h1`
  ${tw`text-center text-5xl font-[900] pt-20 pb-5`}
`;
export const Tab = () => {
  return (
    <TabContainer>
      {/* <Container> */}
      <TabHeader>All platform connect to Findtrend</TabHeader>
      <CustomTabComponent
        tabs={[
          {
            id: 0,

            tabBody: <FaceBook />,
            tabIcon: <BsFacebook color="#3b5998 " />,
          },

          {
            id: 1,

            tabBody: <Twitter />,
            tabIcon: <BsTwitter color="#1DA1F2" />,
          },

          {
            id: 2,
            tabBody: <Pinteres />,
            tabIcon: <BsPinterest color=" #c8232c" />,
          },

          {
            id: 3,
            tabBody: <LinkedInn />,
            tabIcon: <BsLinkedin color="#0072b1" />,
          },

          {
            id: 4,
            tabBody: <Gmail />,
            tabIcon: <SiGmail color="#c71610" />,
          },
        ]}
        className="flex gap-2 items-center justify-center flex-col"
      />
      {/* </Container> */}
    </TabContainer>
  );
};
