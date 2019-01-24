import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EventsList from './EventsList';
import { getEvents } from '../../actions/events'
import AddEventBtn from '../buttons/AddEventBtn';

class EventsListContainer extends PureComponent {
  componentDidMount() {
    if(this.props.events === null) this.props.getEvents()
  }

  render() {
    if (!this.props.events) return 'Loading events ...'
    return (
      <div>
        <h1>Events</h1>
        <EventsList events={this.props.events} />
        { this.props.currentUser ? <AddEventBtn /> : <p>Signup or Login to add events</p>} 
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    events: state.events,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getEvents })(EventsListContainer)
