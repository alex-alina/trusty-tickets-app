import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import TicketsList from '../tickets/TicketsList';
import { getTickets } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
import { login } from '../../actions/users'
import EventDetailsMenu from './EventDetailsMenu';

class EventDetailsContainer extends PureComponent {
  componentDidMount() {
    this.props.getEvent(Number(this.props.match.params.id))
    if (this.props.tickets === null) this.props.getTickets()
  }

  render() {
    if (!this.props.eventDetails) return 'Loading...'
    if (!this.props.tickets) return 'Loading tickets...'

    return (
      <div>
        <EventDetailsMenu />

        <h1>Event: {this.props.eventDetails.name}</h1>
        <p>Start Date: {this.props.eventDetails.startDate}</p>
        <p>End Date: {this.props.eventDetails.endDate}</p>
        <h2>Available Tickets</h2>

        <TicketsList tickets={this.props.tickets.tickets} eventDetails={this.props.eventDetails} />
        { this.props.currentUser !== null ? <button><Link to={`/tickets-add`}>Add Ticket</Link></button> : <button><Link to={`/login`}>Add Ticket</Link></button>}
        

        <button>
          <Link to={`/`}>
            Back
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getEvent, getTickets, login })(EventDetailsContainer)

