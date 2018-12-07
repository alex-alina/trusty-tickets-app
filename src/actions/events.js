import * as request from 'superagent'
import { baseUrl } from '../constants'
import { getTickets } from './tickets'

export const EVENT_CREATED_SUCCESS = 'EVENT_CREATED_SUCCESS'
export const EVENT_CREATED_FAILED = 'EVENT_CREATED_FAILED'
export const EMPTY_NEW_EVENT = 'EMPTY_NEW_EVENT'

export const ADD_EVENTS = 'ADD_EVENTS'
export const ADD_EVENT_DETAILS = 'ADD_EVENT_DETAILS'


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

const addEvents = (events) => ({
  type: ADD_EVENTS,
  payload: events
})

const addEventDetails = (event) => ({
  type: ADD_EVENT_DETAILS,
  payload: event
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
    .then(() => {
      dispatch(getEvents())
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

export const getEvents = () => (dispatch) => {
  request
    .get(`${baseUrl}/events`)
    .then(result =>
      dispatch(addEvents(result.body.events)))
    .catch(err => console.error(err))
}

export const getEvent = (eventId) => (dispatch) => {
  request
    .get(`${baseUrl}/events/${eventId}`)
    .then(response => {
      dispatch(addEventDetails(response.body))
    })
    .then(() => {
      dispatch(getTickets())
    })
    .catch(console.error)
}