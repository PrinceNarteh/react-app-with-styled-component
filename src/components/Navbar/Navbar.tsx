import { Nav, NavbarContainer } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavIcon />
          ULTRA
        </NavLogo>
      </NavbarContainer>
      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;
