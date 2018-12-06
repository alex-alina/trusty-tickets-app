import { ADD_EVENTS } from '../actions/events'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_EVENTS:
      return payload

    default:
      return state
  }
}
