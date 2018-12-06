import * as React from 'react'
import { Link } from 'react-router-dom';
import './TicketList.css'

export default function TicketsList(props) {
  return (
    // <h1>hello</h1>
    <ul>
      {props.tickets.map(ticket =>
        <li key={ticket.id}>
          <Link to={`events/${props.eventDetails.id}/tickets/${ticket.id}`}>
            {/*ticket.authname*/}author: ({ticket.price})€, ({ticket.description}), {ticket.risk}
          </Link>
        </li>)}
    </ul>
  )
}

// tickets={this.props.tickets} eventDetails={this.props.eventDetails