import { ADD_TICKETS } from '../actions/tickets';

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_TICKETS:
      return payload

    default:
      return state
  }
}
