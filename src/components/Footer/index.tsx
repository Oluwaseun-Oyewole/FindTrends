import React from "react";
import { Container } from "..";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { footerlinks, footerProp } from "../../utils/data";

const FooterContainer = styled.div`
  ${tw`flex items-center justify-between font-bold`}
`;
const FooterParent = styled.div`
  ${tw`py-8 bg-white shadow-xl text-black font-medium font-satoshi`}
`;
const FooterMenuLinks = styled.ul`
  ${tw`list-none flex gap-10`}
`;
const FooterLinks = styled.li``;
const FooterLink = styled(Link);
const FooterLogo = styled.img``;

export const Footer = () => {
  return (
    <FooterParent>
      <Container>
        <FooterContainer>
          <FooterLogo src="/assets/img/Frame (9).png"></FooterLogo>
          <FooterMenuLinks>
            {footerlinks?.map(({ title, link }): any => {
              return (
                <>
                  <FooterLinks>
                    <Link to={`${link}`}>{title}</Link>
                  </FooterLinks>
                </>
              );
            })}
          </FooterMenuLinks>
        </FooterContainer>
      </Container>
    </FooterParent>
  );
};
