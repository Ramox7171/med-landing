import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types.helper";
import "./ActionButton.scss";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  classes?: string;
  href?: string;
};

const ActionButton = ({ children, setSelectedPage, classes = "", href }: Props) => {
  return (
    <AnchorLink
      className={`action-button ${classes ? "action-button--custom " + classes : ""}`.trim()}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={href || `#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
