import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchEvents } from './utils/eventbriteAPI';
import { fetchMeetups, fetchMeetupPicture } from './utils/meetup_api';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // window.fetchEvents = fetchEvents;
  window.fetchMeetups = fetchMeetups;

  ReactDOM.render(<Root store={ store }/>, root);
});
