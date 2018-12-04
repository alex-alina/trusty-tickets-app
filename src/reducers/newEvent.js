import {
  EVENT_CREATED_SUCCESS, EMPTY_NEW_EVENT, EVENT_CREATED_FAILED
} from '../actions/events'

export default function (state = null, { type, payload }) {
  switch (type) {
    case EVENT_CREATED_SUCCESS:
      return payload

    case EMPTY_NEW_EVENT:
      return null

    case EVENT_CREATED_FAILED:
      return {
        error: payload
      }

    default:
      return state
  }
}
