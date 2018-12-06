import React, { PureComponent } from 'react'
import './TicketForm.css'

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
      <div className="ticket-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Price
            <input type="number" name="price" value={
              this.state.price || ''
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

          <button type="submit">Create Ticket</button>
        </form>
      </div>
    )
  }
}
