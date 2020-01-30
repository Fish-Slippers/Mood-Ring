import React from 'react';
import { Component } from 'react';
import CalendarItem from './CalendarItem.jsx';
import '../style.css';

/* Displays each mood in a calendarItem box related to that specific user. User data 
 * has been passed down from MainContainer via props 
 */

class Calendar extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    const moods = [];
    for (let i = 0; i < this.props.userMoods.length; i += 1) {
      moods.push(<CalendarItem userMoods={ this.props.userMoods[i] } key={ 'mood-' + i}/>);
    }
    return (
      <div id="calendar">
        {moods}
      </div>
    );
  }
}


export default Calendar;