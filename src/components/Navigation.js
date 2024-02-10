import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from './Button';

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  // default flex-direction is horizontal
  display: flex;
  // mainAxisAlignment
  justify-content: space-between;
  // crossAxisAlignment
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  // top & bottom: 0px
  // left & right auto/center
  margin: 0 auto;
`;

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`

const MenuItem = styled.li`
// top & bottom is 0
// left & right is 1rem
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;


&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after {
  width: 100%;
}

`

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>RoadMap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://www.kakaki.cc"/>
      </NavBar>
    </Section>
  );
};

export default Navigation;
