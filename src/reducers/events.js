import { ADD_EVENTS } from '../actions/events'
  
/*
The state will contain the users in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
      
    // case ADD_USER:
    //   return {
    //     ...state,
    //     [payload.id]: payload
    //   }

    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     [payload.id]: payload
    //   }

    case ADD_EVENTS:
      return payload

    default:
      return state
  }
}
