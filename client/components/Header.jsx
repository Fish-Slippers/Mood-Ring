import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styling for the whole header
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-family: 'Assistant', sans-serif;
  position: relative;
  z-index: 999;
`;

// Styling for the 'Mood-Ring' title
const Logo = styled(Link)`
  margin: 2px;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`;

// Styling for the Log In button
const AuthLink = styled(Link)`
  text-decoration: none;
  font-family: 'Assistant', sans-serif;
  border-radius: 20px;
  font-size: 20px;
  margin: 3px;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      !loggedIn ? (
        <Nav>
          <Logo to="/">m☯☯d</Logo>
          <div>
            <AuthLink to="/user/register">Register</AuthLink>
            <AuthLink to="/user/login">Login</AuthLink>
          </div>
        </Nav>
        ) : (
        <Nav>
          <Logo to="/">m☯☯d</Logo>
          <AuthLink to="/user/logout">Logout</AuthLink>
        </Nav>
        )
    )
  }
}

export default Header;
