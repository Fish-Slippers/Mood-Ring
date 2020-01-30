import React, { Component } from 'react';

import styled from 'styled-components';

const ImageWrapper = styled.div`
  z-index: -999;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 1;
  transition: 300ms opacity ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  ransition: 300ms opacity ease-in-out;
`;

class Background extends Component {
  render() {
    const { currentImage } = this.props;
    return (
      <ImageWrapper>
        <Overlay />
        <BackgroundImage src={currentImage} />
      </ImageWrapper>
    );
  }
}

export default Background;
