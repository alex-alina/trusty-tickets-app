import * as React from 'react'
import { Link } from 'react-router-dom';

export default function TicketsList(props) {

  return (
    <ul>
      {props.tickets
        .map(ticket =>
          <li key={ticket.id}>
          <span className="color-code"></span>
            <Link to={`/events/${props.eventDetails.id}/tickets/${ticket.id}`}>
              {ticket.user.firstName} {ticket.user.lastName}: {ticket.price}€, {ticket.description}
            </Link>
          </li>)}
    </ul>
  )
}
