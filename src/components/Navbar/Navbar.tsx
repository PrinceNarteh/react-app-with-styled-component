import { Nav, NavbarContainer, NavLogo, NavIcon } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          ULTRA
        </NavLogo>
      </NavbarContainer>
      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;
