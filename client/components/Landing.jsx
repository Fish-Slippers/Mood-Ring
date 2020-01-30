import React, { Component } from 'react';

import styled from 'styled-components';

//Styling for the whole body
const MainDiv = styled.div`
  width: 100%;
  height: 650px;
  font-family: 'Assistant', sans-serif;
  text-align: center;
  margin-top: 10px;
`;

//Styling for the daily quote
const Quote = styled.h1`
  font-style: italic;
  font-family: 'Assistant', sans-serif;
  margin-top: 80px;
`;

//Styling for the log in button
const LoginButton = styled.button`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 3px;
  width: 18%;
  height: 7%;
  &:focus {
    outline: none;
  }
`;

class Landing extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     quote: '',
  //   };
  // }

  // componentDidMount() {
  //   fetch('https://type.fit/api/quotes')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const titlesArray = ['Ph.D.','M.D.','J.D.','Esq.','the Third','Scholar','Attorney at Law','Duchess of Cambridge','His Majesty','The Reverend','Viscount of Hereford','7th Baron of Cromwell','Spiritual Leader','Life Coach, Inspirational Speaker','Frontend Master'];
  //       const randomTitleNum = Math.floor(Math.random() * (titlesArray.length));
  //       const randomNum = Math.floor(Math.random() * 1620);
  //       if (data[randomNum].author === null) {
  //         data = `"${data[randomNum].text}" - Jon Gonzalez, ${titlesArray[randomTitleNum]}`;
  //         this.setState({
  //           quote: data,
  //         })
  //       } else {
  //         data = `"${data[randomNum].text}" --${data[randomNum].author}`;
  //         this.setState({
  //           quote: data,
  //         })
  //       }
  //     })
  // };

  render() {
    return (
      <MainDiv>
        <Quote>{this.state.quote}</Quote>
        <LoginButton href="/register">Start Today</LoginButton>
      </MainDiv>
    );
  }
}

export default Landing;
