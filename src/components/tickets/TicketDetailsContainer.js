import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import TicketsList from '../tickets/TicketsList';
import { getTicket } from '../../actions/tickets'
// import { getEvent } from '../../actions/events'
import EventDetailsMenu from '../events/EventDetailsMenu';

class TicketDetailsContainer extends PureComponent {
  componentWillMount() {
    if (this.props.tickets === null) this.props.getTicket(Number(this.props.match.params.id), Number(this.props.match.params.ticketId))
  }

  render() {
    if (!this.props.eventDetails) return 'Loading...'
    if (!this.props.tickets) return 'Loading tickets...'

    return (
      <div>
        <EventDetailsMenu />
        <h1>Ticket from -author-</h1>
        <h3>The risk of this ticket being a fraud is: {}%</h3>
        <h4>{}€</h4>
        <p>Event: {}</p>
        <p>Ticket description: {}</p>
        <button>
          <Link to={`/comments-add`}>
            Add Comment
          </Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    eventDetails: state.eventDetails,
    tickets: state.completeTickets,
  }
}

export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer)

