import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const checkbox = useRef();

  const checkboxHandler = () => {
    checkbox.current.checked = false;
  };

  useEffect(() => {
    window.addEventListener('scroll', checkboxHandler);
  }, []);

  return (
    <nav className="navbar">
      <Container>
        <Link to="/" className="navbar__brand" onClick={checkboxHandler}>
          <span className="navbar__logo"></span>
          <span className="navbar__brand-name">MeetYourGuru</span>
        </Link>

        <input
          className="navbar__checkbox"
          type="checkbox"
          name="check"
          id="check"
          ref={checkbox}
        />
        <label for="check" className="navbar__checkbtn">
          <i className="fas fa-bars fa-5x"></i>
        </label>

        <ul className="navbar__collections">
          <li className="navbar__list">
            <NavLink
              exact
              className="navbar__links"
              activeClassName="navbar__links--active"
              to="/"
              onClick={checkboxHandler}
            >
              home
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink
              exact
              className="navbar__links"
              activeClassName="navbar__links--active"
              to="/meditators"
              onClick={checkboxHandler}
            >
              meditators
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink
              exact
              className="navbar__links"
              activeClassName="navbar__links--active"
              to="/about"
              onClick={checkboxHandler}
            >
              about
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink
              exact
              className="navbar__links"
              activeClassName="navbar__links--active"
              to="/contact"
              onClick={checkboxHandler}
            >
              contact us
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
