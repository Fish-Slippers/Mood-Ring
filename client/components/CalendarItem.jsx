import React from 'react';
import { Component } from 'react';
import '../style.css';
import moment from 'moment';

class CalendarItem extends Component {
  render () {
    /* Renders the emoticons in calendar items based on mood */
    if (this.props.userMoods.mood === 'happy') {
      this.props.userMoods.mood = "happy 😀";
    }
    if (this.props.userMoods.mood === 'sad') {
      this.props.userMoods.mood = "sad 😥";
    }
    if (this.props.userMoods.mood === 'anxious') {
      this.props.userMoods.mood = "anxious 😰";
    }
    if (this.props.userMoods.mood === 'frustrated') {
      this.props.userMoods.mood = "frustrated 😥";
    }
    if (this.props.userMoods.mood === 'relaxed') {
      this.props.userMoods.mood = "relaxed ⛱️";
    }
    if (this.props.userMoods.mood === 'tired') {
      this.props.userMoods.mood = "tired 😴";
    }
    if (this.props.userMoods.mood === 'excited') {
      this.props.userMoods.mood = "excited 🤩";
    }
    if (this.props.userMoods.mood === 'distracted') {
      this.props.userMoods.mood = "distraced 🤖";
    }
    return (
      <div id="calendaritem">
        <p>Date: {moment(this.props.userMoods.date).format("MM/DD/YYYY hh:mm a")}</p>
        <p>Mood: { this.props.userMoods.mood }</p>

      </div>
    );
  }
}

export default CalendarItem;
