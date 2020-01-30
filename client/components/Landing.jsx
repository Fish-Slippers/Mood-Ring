import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

//Styling for the whole body
const MainDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Assistant', sans-serif;
  text-align: center;
  margin-top: 10px;
  z-index: 999;
`;

//Styling for the daily quote
const Quote = styled.h1`
  font-style: italic;
  font-family: 'Assistant', sans-serif;
  margin: 30px 0;
  width: 800px;
  margin: 0 auto;
  color: #eee;
`;

//Styling for the log in button
const Login = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  width: 200px;
  margin: 20px auto;
  border-radius: 20px;
  background: #3042CF;
  opacity: 1;
  outline: none;
  border: none;
  &:hover {
    background: #3042C0;
  }
`;

const Logo = styled(Link)`
  margin: 2px;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 7rem;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`;

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
    };
  }

  componentDidMount() {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        const titlesArray = ['Ph.D.','M.D.','J.D.','Esq.','the Third','Scholar','Attorney at Law','Duchess of Cambridge','His Majesty','The Reverend','Viscount of Hereford','7th Baron of Cromwell','Spiritual Leader','Life Coach, Inspirational Speaker','Frontend Master'];
        const randomTitleNum = Math.floor(Math.random() * (titlesArray.length));
        const randomNum = Math.floor(Math.random() * 1620);
        if (data[randomNum].author === null) {
          data = `"${data[randomNum].text}" - Jon Gonzalez, ${titlesArray[randomTitleNum]}`;
          this.setState({
            quote: data,
          })
        } else {
          data = `"${data[randomNum].text}" --${data[randomNum].author}`;
          this.setState({
            quote: data,
          })
        }
      })
  };

  render() {
    return (
      <MainDiv>
        <Logo to="/">m☯☯d</Logo>
        <Quote>{this.state.quote}</Quote>
        <Login to="/user/register">Start Today</Login>
      </MainDiv>
    );
  }
}

export default Landing;
