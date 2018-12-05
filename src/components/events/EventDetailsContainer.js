import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MenuButtons from '../menu/MenuButtons';
// import TicketsList from './TicketsList';
// import { getTickets } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
// import { Redirect } from 'react-router-dom'

class EventDetailsContainer extends PureComponent {
  componentDidMount() {
    this.props.getEvent(Number(this.props.match.params.id))
    // if(this.props.tickets === null) this.props.getTickets()
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
        {/* <TicketsList tickets={this.props.tickets} /> */}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    // tickets: state.tickets,
    eventDetails: state.eventDetails,
   
  }
}

export default connect(mapStateToProps, { getEvent, /*getTickets */})(EventDetailsContainer)
