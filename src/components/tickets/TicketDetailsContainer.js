import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getTicket } from '../../actions/tickets'
import EventDetailsMenu from '../events/EventDetailsMenu';

class TicketDetailsContainer extends PureComponent {
  componentDidMount() {
    this.props.getTicket(Number(this.props.match.params.id), Number(this.props.match.params.ticketId))
  }

  render() {
    if (!this.props.ticket) return 'Loading tickets...'

    return (
      <div>
        <EventDetailsMenu />
        <h1>Ticket from {this.props.ticket.user.firstName}</h1>
        <h3>The risk of this ticket being a fraud is: {Math.floor(this.props.ticket.risk)}%</h3>
        <h4>{this.props.ticket.price}€</h4>
        <p>Event: {this.props.ticket.socialEvent.name}</p>
        <p>Ticket description: {this.props.ticket.description}</p>
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
    ticket: state.ticketDetails
  }
}

export default connect(mapStateToProps, { getTicket })(TicketDetailsContainer)

