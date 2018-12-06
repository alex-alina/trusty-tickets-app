import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createNewTicket } from '../../actions/tickets'
import { Redirect } from 'react-router-dom'
import TicketForm from './TicketForm';

class CreateTicketPage extends PureComponent {

  handleSubmit = (data) => {
    this.props.postNewTicket(data.price, data.description, data.picture)
  }

  render() {
    if (this.props.newTicket) return (
      <Redirect to={`/events/${this.props.eventId}`} />
    )

    return (
      <div>
        <h1>Create New Ticket</h1>
        <TicketForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    newTicket: state.newTicket,
    eventId: state.eventDetails.id
  }
}

export default connect(mapStateToProps, { postNewTicket: createNewTicket })(CreateTicketPage)

