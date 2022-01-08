import styled from "styled-components";
import { Container, theme } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #101522;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  color: ${theme.colors.light};
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    top: 0;
    right: 0;
    display: block;
    cursor: pointer;
    font-size: 1.8rem;
    position: absolute;
    transform: translate(-100%, 60%);
  }
`;
