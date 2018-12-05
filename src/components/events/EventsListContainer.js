import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MenuButtons from '../menu/MenuButtons';
import EventsList from './EventsList';
import { getEvents } from '../../actions/events'
// import { Redirect } from 'react-router-dom'

class EventsListContainer extends PureComponent {
  componentWillMount() {
    if(this.props.events === null) this.props.getEvents()
    
  }

  render() {
    if (!this.props.events) return 'Loading events ...'
    return (
      <div>
        <h1>Events</h1>
        <MenuButtons />
        <EventsList events={this.props.events} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { getEvents })(EventsListContainer)
