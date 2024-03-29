import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", sans-serif;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/" />
      W.
    </LogoText>
  );
};

export default Logo;
