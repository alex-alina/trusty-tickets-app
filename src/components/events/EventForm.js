import React, { PureComponent } from 'react'
import './EventForm.css'

export default class EventForm extends PureComponent {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="event-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Name
            <input type="text" name="name" value={
              this.state.name || ''
            } onChange={this.handleChange} />
          </label>

          <label>
            Description
            <input type="text" name="description" value={
              this.state.description || ''
            } onChange={this.handleChange} />
          </label>

          <label>
            Picture URL
            <input type="text" name="picture" value={
              this.state.picture || ''
            } onChange={this.handleChange} />
          </label>
          

          <label>
            Start Date
  					<input type="date" name="startDate" value={
              this.state.startDate || ''
            } onChange={this.handleChange} />
          </label>

          <label>
            End Date
  					<input type="date" name="endDate" value={
              this.state.endDate || ''
            } onChange={this.handleChange} />
          </label>

          <button type="submit">Create event</button>
        </form>
      </div>
    )
  }
}
