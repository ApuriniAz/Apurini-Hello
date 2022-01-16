import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { logout, useAuthDispatch, useAuthState } from "../../contexts/authContext";

import LanguageSelector from "../languageSelector/LanguageSelector";
import "./navigation.css";

function Navigation({ t, languageOptions, setLanguage, currentLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAuthDispatch();

  const { userDetails, loading, errorMessage } = useAuthState();

  const toggle = () => setIsOpen(!isOpen);

  function handleLogout(params) {
    logout(dispatch);
  }

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
            {/* <NavItem>
              <NavLink href='./#team'>{t("team.navigation-title")}</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href='./#contact' className="navigation-link">{t("contact.navigation-title")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='./user' className='ml-auto navigation-link'>
                {userDetails && !loading && !errorMessage ? userDetails : t("user.login-title")}
              </NavLink>
            </NavItem>
            {userDetails && !loading && !errorMessage ? (
              <Button color='danger' onClick={() => handleLogout()}>
                {t("logout")}
              </Button>
            ) : null}
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
