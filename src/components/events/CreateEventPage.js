import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createNewEvent, emptyNewCreatedEvent } from '../../actions/events'
import { Redirect } from 'react-router-dom'
import EventForm from './EventForm';

class CreateEventPage extends PureComponent {


  handleSubmit = (data) => {
    this.props.postNewEvent(data.name, data.description, data.picture, data.startDate, data.endDate)
  }

  render() {
    if (this.props.newEvent) return (
      <Redirect to="/" />
    )

    return (
      <div>
        <h1>Create New Event</h1>

          <EventForm onSubmit={this.handleSubmit} />

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    newEvent: state.newEvent
  }
}

export default connect(mapStateToProps, { postNewEvent: createNewEvent, emptyNewCreatedEvent })(CreateEventPage)
