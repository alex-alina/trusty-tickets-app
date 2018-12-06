import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import TicketsList from '../tickets/TicketsList';
import { getTickets } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
import EventDetailsMenu from './EventDetailsMenu';

class EventDetailsContainer extends PureComponent {
  componentWillMount() {
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
        <h2>Tickets Available</h2>

        <TicketsList tickets={this.props.tickets} eventDetails={this.props.eventDetails} />

        <button>
          <Link to={`/tickets-add`}>
            Add Ticket
          </Link>
        </button>

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
  }
}

export default connect(mapStateToProps, { getEvent, getTickets })(EventDetailsContainer)

