import React, { Component } from 'react';
import MeetupItem from './meetup_item';

class Meetup extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.meetups.length === 0 || this.props.eventbrite.length === 0){
      return <div>Please turn on CORS for Meetup Events</div>;
    }
    // console.log(this.props)
    // let row = this.props.meetups.results.slice(0, 10);
    return(
      <div className="events-logo-container flex-container flex-vertical">
        <img className="meetup-logo" src="meetup.png" alt="eventbrite-logo"/>
        <div className="events-index flex-container flex-vertical" id="meetup-index">
          <ul className="events-list">
            {this.props.meetups.map( (el, id) => (
              <MeetupItem
                key={id}
                events={el}
                date={Object.keys(el)[0]}
                />
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default Meetup;
