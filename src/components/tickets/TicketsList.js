import * as React from 'react'
import { Link } from 'react-router-dom';

export default function TicketsList(props) {

  return (
    <ul>
      {props.tickets
        .filter(ticket => {
          const eventId = props.eventDetails.id
          console.log('evId', eventId)
          return ticket.socialEvent.id === eventId
        })

        .map(ticket =>
          <li key={ticket.id}>
            <Link to={`events/${ticket.socialEvent.id}/tickets/${ticket.id}`}>
              {ticket.user.firstName} {ticket.user.lastName}: ({ticket.price})€, ({ticket.description})
          </Link>
          </li>)}
    </ul>
  )
}
