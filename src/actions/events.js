import * as request from 'superagent'
import { baseUrl } from '../constants'
// import { logout } from './users'
// import {isExpired} from '../jwt'

export const EVENT_CREATED_SUCCESS = 'EVENT_CREATED_SUCCESS'
export const EVENT_CREATED_FAILED = 'EVENT_CREATED_FAILED'
export const EMPTY_NEW_EVENT = 'EMPTY_NEW_EVENT'

export const ADD_EVENTS = 'ADD_EVENTS'

const eventCreatedSuccess = (event) => ({
  type: EVENT_CREATED_SUCCESS,
  payload: event
})

const eventCreatedFailed = (error) => ({
  type: EVENT_CREATED_FAILED,
  payload: error || 'Unknown error'
})

const emptyNewCreatedEvent = () => ({
  type: EMPTY_NEW_EVENT,
})

export const createNewEvent = (name, description, picture, startDate, endDate) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ name, description, picture, startDate, endDate })
    .then(result => {
      dispatch(eventCreatedSuccess(result.body))
    })
    .then(result => {
      dispatch(emptyNewCreatedEvent())
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch(eventCreatedFailed(err.response.body.message))
      }
      else {
        console.error(err)
      }
    })
}


const addEvents = (events) => ({
  type: ADD_EVENTS,
  payload: events
})


export const getEvents = () => (dispatch) => {
  // const state = getState()
  // if (!state.currentUser) return null
  // const jwt = state.currentUser.jwt

  // if (isExpired(jwt)) return dispatch(logout())

  request
    .get(`${baseUrl}/events`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(result => 
      dispatch(addEvents(result.body.events)))
    .catch(err => console.error(err))
}

// const updateUsers = (users) => ({
//   type: UPDATE_USERS,
//   payload: users
// })


// export const getUsers = () => (dispatch, getState) => {
//   const state = getState()
//   if (!state.currentUser) return null
//   const jwt = state.currentUser.jwt

//   if (isExpired(jwt)) return dispatch(logout())

//   request
//     .get(`${baseUrl}/users`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(result => dispatch(updateUsers(result.body)))
//     .catch(err => console.error(err))
// }