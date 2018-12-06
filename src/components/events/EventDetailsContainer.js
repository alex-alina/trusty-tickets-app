import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MenuButtons from '../menu/MenuButtons';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router'
import TicketsList from '../tickets/TicketsList';
// import { getTickets } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
// import { Redirect } from 'react-router-dom'

class EventDetailsContainer extends PureComponent {
  componentDidMount() {
    this.props.getEvent(Number(this.props.match.params.id))
    // this.props.getTickets()
    // if(this.props.eventDetails.tickets === null) this.props.getTickets()
  }

  render() {
    if (!this.props.eventDetails) return 'Loading...'
    // if (!this.props.tickets) return 'Loading tickets...'
    return (
      <div>
        <h1>Event: {this.props.eventDetails.name}</h1>
        <p>Start Date: {this.props.eventDetails.startDate}</p>
        <p>End Date: {this.props.eventDetails.endDate}</p>
        <h2>Tickets Available</h2>
        <MenuButtons />
        <TicketsList tickets={this.props.eventDetails.tickets} eventDetails={this.props.eventDetails} />
        <button>
          <Link to={`/tickets-add`}>
            Add Ticket
          </Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    eventDetails: state.eventDetails,
  }
}

export default connect(mapStateToProps, { getEvent, /*getTickets*/ })(EventDetailsContainer)

