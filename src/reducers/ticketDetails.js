import { ADD_TICKET_DETAILS } from '../actions/tickets'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_TICKET_DETAILS:
      return payload

    default:
      return state
  }
}