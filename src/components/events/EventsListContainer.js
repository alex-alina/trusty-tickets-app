import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MenuButtons from '../menu/MenuButtons';
import EventsList from './EventsList';
import { getEvents } from '../../actions/events'

class EventsListContainer extends PureComponent {
  componentDidMount() {
    if(this.props.events === null) this.props.getEvents()
    
  }

  render() {
    if (!this.props.events) return 'Loading events ...'
    return (
      <div>
        <MenuButtons />
        <h1>Events</h1>
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
