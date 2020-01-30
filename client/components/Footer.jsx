import React, { Component } from 'react';

import styled from 'styled-components';

//Link styling
const LinkWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  bottom: 0;
  z-index: 999;
  h1 {
    display: block;
    width: 100%;
    margin: 0;
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  display: inline-block;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  opacity: 0.8;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
`;

class Footer extends Component {
  render() {
    return (
      <LinkWrapper>
      <h1 style={{ margin: 0 }}>MADE BY: </h1>
        <Link href="https://github.com/nabramow" target="_blank">@nabramow</Link>
        <Link href="https://github.com/sarapowers" target="_blank">@sarapowers</Link>
        <Link href="https://github.com/mitchelsevere" target="_blank">@mitchelsevere</Link>
        <Link href="https://github.com/natattackvick" target="_blank">@natattackvick</Link>
      </LinkWrapper>
    );
  }
}

export default Footer;
