import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import LanguageSelector from "../languageSelector/LanguageSelector";
import "./navigation.css";

function Navigation({ t, languageOptions, setLanguage, currentLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' className='navigation' light expand='md'>
        <NavbarBrand className='navigation-brand' href='/'>
          {t("apurini")}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='./#about' className="navigation-link">{t("about.navigation-title")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='./#services' className="navigation-link">{t("services.navigation-title")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='./#contact' className="navigation-link">{t("contact.navigation-title")}</NavLink>
            </NavItem>
            <LanguageSelector
              className=''
              t={t}
              setLanguage={setLanguage}
              languageOptions={languageOptions}
              currentLanguage={currentLanguage}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
