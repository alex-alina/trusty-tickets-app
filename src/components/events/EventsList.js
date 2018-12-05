import * as React from 'react'
import { Link } from 'react-router-dom';

export default function EventsList(props) {
  return (
    <ul>
      {props.events.map(event =>
        <li key={event.id}>
          <Link to={`events/${event.id}`}>
            {event.name}: Start Date ({event.startDate}) - End Date ({event.endDate})
          </Link>
        </li>)}
    </ul>
  )
}














