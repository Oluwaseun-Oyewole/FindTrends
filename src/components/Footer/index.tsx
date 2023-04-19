import React from "react";
import { Container } from "..";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { footerlinks } from "../../utils/data";

const FooterContainer = styled.div`
  ${tw`flex-col md:flex-row flex items-center justify-between font-bold `}
  @media screen and (max-width: 768px) {
    ${tw`px-3`}
  }
`;
const FooterParent = styled.div`
  ${tw`pt-5 md:py-5 bg-white shadow-xl text-black font-medium font-satoshi`}
`;
const FooterMenuLinks = styled.ul`
  ${tw`my-5 md:my-0 list-none text-center md:text-start flex gap-3 md:gap-6  md:gap-10 flex-col md:flex-row text-xs md:text-base`}
`;
const FooterLinks = styled.li``;
const FooterLogo = styled.img``;

export const Footer = () => {
  return (
    <FooterParent>
      <Container>
        <FooterContainer>
          <FooterLogo src="/assets/img/Frame (9).png"></FooterLogo>
          <FooterMenuLinks>
            {footerlinks?.map(({ title, link }, index): any => {
              return (
                <div key={index}>
                  <FooterLinks>
                    <Link to={`${link}`}>{title}</Link>
                  </FooterLinks>
                </div>
              );
            })}
          </FooterMenuLinks>
        </FooterContainer>
      </Container>
    </FooterParent>
  );
};
