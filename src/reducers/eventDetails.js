import { ADD_EVENT_DETAILS } from '../actions/events'

export default (state = null, { type, payload }) => {
  switch (type) {
    case ADD_EVENT_DETAILS:
      return payload

    default:
      return state
  }
}
