import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { theme } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  Hamburger,
} from "./Navbar.elements";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <IconContext.Provider value={{ color: `${theme.colors.light}` }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <Hamburger onClick={() => setClicked(!clicked)}>
            {clicked ? <FaTimes /> : <FaBars />}
          </Hamburger>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
