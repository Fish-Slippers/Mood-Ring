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
import Calendar from '../components/Calendar.jsx';
import moment from 'moment';
import '../style.css';

//The main body styling
const MainDiv = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 650px;
  margin-top: 10px;
  font-family: 'Assistant', sans-serif;
  z-index: 999;
`;

const Response = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  margin: 12px;
  color: #fff;
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
  text-transform: uppercase;
  outline: 0;
  background: #3042CF;
  color: #FFF;
  width: 100px;
  border: 0;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover, 
  &:active, 
  &:focus {
      background: #3042C0;
  }`;

class MoodContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: ''
    };

    this.moodDataSubmit = this.moodDataSubmit.bind(this);
  }

  moodDataSubmit(e) {
    e.preventDefault();
    const username = this.props.currentUser.username;
    const mood = e.target[0].value;
    const date = e.target[1].value;
    /* Adds our mood input data to the database and receives a motivation quote 
     * related to that mood back from the database
    */
    const user = {
      username,
      mood, 
      date
    };
    fetch('/user/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          response: data
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    const cur = this.props.currentUser.username; 
    return (
      <MainDiv>
        <h1>How are you feeling today {cur}?</h1>
        <form className="mood" onSubmit={this.moodDataSubmit}>
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
        <input type="datetime-local" id="date-picker" defaultValue={moment().format("YYYY-MM-DDThh:mm")}></input>
        <br></br>
        <SubmitButton>submit</SubmitButton>
        </form>
        <Response className="return-text">{this.state.response}</ Response>
        <Calendar userMoods={ this.props.userMoods }/>
      </MainDiv>
    );
  }
}
export default MoodContainer;