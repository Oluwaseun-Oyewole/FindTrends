import React, { ReactNode, FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type props = {
  text?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  background?: string;
  color?: string;
  onClick?: () => void;
  icon?: React.ReactElement;
  padding?: boolean;
  fontWeight?: number;
  fontSize?: boolean;
  paddingvalues?: string;
  opacity?: boolean;
};

const ButtonStyles = styled.button<{
  background?: string;
  color?: string;
  padding?: boolean;
  icon?: React.ReactElement;
  fontWeight?: number;
  fontSize?: boolean;
  paddingvalues?: string;
  opacity?: boolean;
}>`
  background: ${({ background }) => (background ? background : "#1E1E1E")};
  border-radius: 30px;
  color: ${({ color }) => (color ? color : "#fff")};
  outline: none;
  cursor: pointer;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  ${tw`font-satoshi`}
  &:hover {
    ${tw`opacity-50 transition-all duration-700 ease-in-out delay-300`}
  }
  display: ${({ icon }) => (icon ? "flex" : "")};
  gap: ${({ icon }) => (icon ? "5px" : "")};
  align-items: ${({ icon }) => (icon ? "center" : "")};
  padding: ${({ padding, paddingvalues }) =>
    padding ? `${paddingvalues}` : " 10px 30px"};
  opacity: ${({ opacity }) => (opacity ? `0.5` : "")};
  font-size: ${({ fontSize }) => (fontSize ? "20px" : "15px")};
`;

export const Button: FC<props> = ({
  children,
  type,
  onClick,
  background,
  color,
  icon,
  padding,
  fontWeight,
  fontSize,
  paddingvalues,
  opacity,
}) => {
  // console.log(fontSize);

  return (
    <ButtonStyles
      type={type}
      onClick={onClick}
      background={background}
      color={color}
      padding={padding}
      icon={icon}
      fontWeight={fontWeight}
      fontSize={fontSize}
      paddingvalues={paddingvalues}
      opacity={opacity}
    >
      {children} {icon}
    </ButtonStyles>
  );
};
