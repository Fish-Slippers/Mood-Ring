/****************************\
*                            *
*  How are you feeling: gets *
*  user mood input and       *
*  responds to it            *
*                            *
\****************************/

import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

import '../style.css';

//The main body styling
const MainDiv = styled.div`
  text-align: center;
  width: 100%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
`;

const Response = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

const SelectStyle = styled.select`
  font-family: 'Assistant', sans-serif;
  max-height: 40px;
  font-size: 18px;
  max-width: 130px;
  opacity: 0.6;
  padding: 20px;
`;

const SubmitButton = styled.button`
margin: auto;
text-decoration: none;
border-radius: 20px;
opacity: 0.6%
font-size: 20px;
&:focus {
  outline: none;
}
`;

const mapStateToProps = (state) => ({
  //used to bring in the pieces of state that the components on this page will use
    currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  sendMoodData: (username, date, mood) => dispatch(actions.sendMoodData(username, date, mood)),
});

class MoodContainer extends Component {
  constructor() {
    super();

    this.state = {
      response: ''
    };

    this.moodDataSubmit = this.moodDataSubmit.bind(this);
  }

  moodDataSubmit(e) {
    e.preventDefault();
    const username = this.props.currentUser;
    const mood = e.target[0].value;
    const date = e.target[1].value;
    this.props.sendMoodData(username, date, mood);
  }

  render() {
    const cur = this.props.currentUser;
    return (
      <MainDiv>
        <h1>How are you feeling today {cur}?</h1>
        <form className="mood" onSubmit={ this.moodDataSubmit }>
        <SelectStyle id="selector">
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="frustrated">Frustrated</option>
          <option value="tired">Tired</option>
          <option value="relaxed">Relaxed</option>
          <option value="anxious">Anxious</option>
          <option value="excited">Excited</option>
          <option value="distracted">Distracted</option>
        </SelectStyle>
        <br></br>
        <input type="date" id="date-picker" defaultValue={moment().format("YYYY-MM-DD")}></input>
        <br></br>
        <SubmitButton onClick={this.sendMood}>submit</SubmitButton>
        </form>
        <Response className="return-text">{this.state.response}</ Response>
        <Calendar />
      </ MainDiv>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MoodContainer);
