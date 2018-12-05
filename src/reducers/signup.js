import {
  USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED, EMPTY_SIGNUP_SUCCESS
} from '../actions/users'

export default function (state = {}, { type, payload }) {
  switch (type) {
    case USER_SIGNUP_SUCCESS:
      return {
        success: true
      }
    
    case EMPTY_SIGNUP_SUCCESS:
      return { }

    case USER_SIGNUP_FAILED:
      return {
        error: payload
      }

    default:
      return state
  }
}
