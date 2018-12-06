import { TICKET_CREATED_SUCCESS, TICKET_CREATED_FAILED, EMPTY_NEW_TICKET } from '../actions/tickets'

export default function (state = null, { type, payload }) {
  switch (type) {
    case TICKET_CREATED_SUCCESS:
      return payload

    case TICKET_CREATED_FAILED:
      return {
        error: payload
      }

    case EMPTY_NEW_TICKET:
      return null
    default:
      return state
  }
}
