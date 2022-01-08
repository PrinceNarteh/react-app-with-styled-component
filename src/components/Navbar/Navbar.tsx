import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button, theme } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  Hamburger,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const showButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true);

  const handleClick = () => setClicked(!clicked);
  const closeHamburgerMenu = () => setClicked(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: `${theme.colors.light}` }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <Hamburger onClick={handleClick}>
            {clicked ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <NavMenu clicked={clicked} onClick={() => setClicked(!clicked)}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="sign-up">
                  <Button onClick={closeHamburgerMenu} primary bigFont>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
