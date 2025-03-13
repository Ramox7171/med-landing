import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types.helper";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "./../../shared/ActionButton";
import * as strings from "../../shared/mock-content.strings.json";
import "./Navbar.scss";
import { menuItems } from "../../shared/mock.data";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");

  return (
    <nav className={`navbar ${isTopOfPage ? "navbar--top" : "navbar--scrolled"}`}>
      <div className="navbar__container">
        {/* LOGO */}
        <div className="navbar__logo">
          <img className="navbar__img" alt="logo" src={Logo} />
        </div>

        {/* DESKTOP MENU */}
        {isAboveMediumScreens ? (
          <div className="navbar__menu">
            {["Home", "Our Mission", "Our Value", "Why us", "Services", "Testimonials", "Contact"].map((page) => (
              <Link
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
            <div className="navbar__actions">
              <ActionButton setSelectedPage={setSelectedPage}>
                {strings.heroButton}
              </ActionButton>
            </div>
          </div>
        ) : (
          <button className="navbar__menu-btn" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon color="#0000"/>
          </button>
        )}
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu">
          <div className="mobile-menu__header">
            <img className="mobile-menu__img" src={Logo} alt="logo" />
          </div>

          <div className="mobile-menu__links">
            {menuItems.map((page) => (
              <Link
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setMenuIsToggled={setIsMenuToggled}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
