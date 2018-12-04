import * as request from 'superagent'
import { baseUrl } from '../constants'


export const EVENT_CREATED_SUCCESS = 'EVENT_CREATED_SUCCESS'
export const EVENT_CREATED_FAILED = 'EVENT_CREATED_FAILED'
export const EMPTY_NEW_EVENT = 'EMPTY_NEW_EVENT'

export const emptyNewCreatedEvent = () => ({
  type: EMPTY_NEW_EVENT,
})

const eventCreatedFailed = (error) => ({
  type: EVENT_CREATED_FAILED,
  payload: error || 'Unknown error'
})

const eventCreatedSuccess = (event) => ({
  type: EVENT_CREATED_SUCCESS,
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
    .catch(err => {
      if (err.status === 400) {
        dispatch(eventCreatedFailed(err.response.body.message))
      }
      else {
        console.error(err)
      }
    })
}

