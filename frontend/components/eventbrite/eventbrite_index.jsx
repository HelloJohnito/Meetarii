import React from 'react';
import { Link } from 'react-router';
import { timeStampParser } from '../../utils/timestamp_parser';

class eventbriteIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {events: [], currentDate: null};
	}


	render() {
		// console.log(this.props.events);
		let currentDate = null;

    if(this.props.events.length === 0 && Object.keys(this.props.meetupEvents).length === 0){
      return <div className="loader"></div>;
    }

		return (
			<div className="events-logo-container flex-container flex-vertical">
				<img className="eventbrite-logo" src="eventbrite.png" alt="eventbrite-logo"/>
				<div className="events-index flex-container flex-vertical">
					<ul className="events-list">
						{this.props.events.map((event, idx) => {
							const datetime = timeStampParser(event.start.local);
							if (datetime[0] === currentDate) {
								return (
									<li key={idx} className="events-item flex-container flex-horizontal">
										<div className="events-left">
											<h4>Date: {datetime[0]}</h4>
											<h4>Time: {datetime[1]}</h4>
										</div>
										<div className="events-center">
											<h3>{event.name.text}</h3>
										</div>
										<div className="events-right">
											<a target="_blank" href={event.url}>Link To Page</a>
										</div>
									</li>
								);
							}
							else {
								currentDate = datetime[0];
								return (
									<div key={idx}  className="flex-container flex-vertical">
										<h1 className="date-class">{currentDate}</h1>
										<li className="events-item flex-container flex-horizontal">
											<div className="events-left">
												<h4>Date: {datetime[0]}</h4>
												<h4>Time: {datetime[1]}</h4>
											</div>
											<div className="events-center">
												<h3>{event.name.text}</h3>
											</div>
											<div className="events-right">
												<a target="_blank" href={event.url}>Link to Page</a>
											</div>
										</li>
									</div>
								);
							}
						})}
					</ul>
				</div>
			</div>
		);
	}

}

export default eventbriteIndex;
