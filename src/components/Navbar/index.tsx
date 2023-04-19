import React, { useState, useEffect } from "react";
import { navigationData } from "../../utils/data";
import styled from "styled-components";
import tw from "twin.macro";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "../index";
import { animateScroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.div<{ scrollNavbar?: boolean; scrollPast?: boolean }>`
  ${tw`py-5 font-Quicksand font-medium w-full md:pt-8`}
  backdrop-filter: ${({ scrollNavbar }) => scrollNavbar && "blur(10px)"};
  position: fixed;
  z-index: 99999;
  background: ${({ scrollPast }) => scrollPast && "#000"};

  @media screen and (max-width: 768px) {
    ${tw`px-3`}
  }
`;
const NavbarController = styled.div`
  ${tw`flex justify-between items-center`}
`;
const NavbarLogoContainer = styled.div``;
const NavbarLogo = styled.img`
  ${tw`w-[120px] md:w-full`}
`;
const NavbarMenu = styled.ul`
  ${tw`list-none flex items-center gap-7`}

  @media screen and (max-width:960px) {
    ${tw`hidden`};
  }
`;

const MobileNavbarMenu = styled.ul`
  ${tw`flex flex-col gap-10`};
`;
const NavbarItem = styled.li``;
const NavbarMobileItem = styled.li``;

const NavbarButtonContainer = styled.div`
  ${tw`hidden lg:flex`}
`;

const NavbarMobileButtonContainer = styled.div`
  ${tw`flex flex-col items-center gap-5`}
`;

const NavbarMobileIcon = styled.div`
  ${tw`block lg:hidden text-2xl cursor-pointer`};
`;

const MobileNavbarLinks = styled.div<{ click?: boolean }>`
  ${tw`lg:hidden text-center flex flex-col items-center justify-center gap-5 absolute top-[65px] left-0 w-full h-[85vh] bg-black text-white transition-all duration-500 ease-in-out`};
  left: ${({ click }) => (click ? 0 : "-100%")};
`;

export const Navbar = () => {
  const toggleHome = (): void => {
    animateScroll.scrollToTop();
  };

  const [click, setClick] = useState(false);
  const [scrollNavbar, setScrollbar] = useState(false);
  const [scrollPast, setScrollPast] = useState(false);

  const handleClick = (): void => {
    setClick(!click);
  };

  const changeBackground = () => {
    if (window.pageYOffset >= 50) {
      setScrollbar(true);
      setScrollPast(true);
    } else {
      setScrollbar(false);
      setScrollPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <Nav scrollNavbar={scrollNavbar} scrollPast={scrollPast}>
      <Container>
        <NavbarController>
          <NavbarLogoContainer onClick={toggleHome}>
            <NavLink to="/">
              <NavbarLogo src="/assets/img/Logo (1).png" />
            </NavLink>
          </NavbarLogoContainer>

          <NavbarMenu>
            {navigationData?.map(({ pathname, title }, index): any => {
              return (
                <NavbarItem key={index}>
                  <NavLink
                    to={{ pathname }}
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : ""
                    }
                  >
                    {title}
                  </NavLink>
                </NavbarItem>
              );
            })}
          </NavbarMenu>

          <NavbarMobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </NavbarMobileIcon>

          <NavbarButtonContainer>
            <Button
              type="button"
              children="Login"
              onClick={() => null}
              background="transparent"
              padding={true}
              paddingvalues="10px 35px"
            />
            <Button
              type="button"
              children="Register"
              onClick={() => null}
              background="#fff"
              color="#000"
              padding={true}
              paddingvalues="10px 35px"
            />
          </NavbarButtonContainer>
        </NavbarController>

        <MobileNavbarLinks click={click}>
          <MobileNavbarMenu>
            {navigationData?.map(({ pathname, title }, index): any => {
              return (
                <NavbarMobileItem key={index}>
                  <NavLink
                    to={{ pathname }}
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : ""
                    }
                  >
                    {title}
                  </NavLink>
                </NavbarMobileItem>
              );
            })}
          </MobileNavbarMenu>
          <NavbarMobileButtonContainer>
            <Button
              type="button"
              children="Login"
              onClick={() => null}
              background="transparent"
            />
            <Button
              type="button"
              children="Register"
              onClick={() => null}
              background="#fff"
              color="#000"
            />
          </NavbarMobileButtonContainer>
        </MobileNavbarLinks>
      </Container>
    </Nav>
  );
};
