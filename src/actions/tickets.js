import * as request from 'superagent'
import { baseUrl } from '../constants'

export const TICKET_CREATED_SUCCESS = 'TICKET_CREATED_SUCCESS'
export const TICKET_CREATED_FAILED = 'TICKET_CREATED_FAILED'
export const EMPTY_NEW_TICKET = 'EMPTY_NEW_TICKET'

export const ADD_TICKETS = 'ADD_TICKETS'
export const ADD_EVENT_DETAILS = 'ADD_EVENT_DETAILS'


const ticketCreatedSuccess = (ticket) => ({
  type: TICKET_CREATED_SUCCESS,
  payload: ticket
})

const ticketCreatedFailed = (error) => ({
  type: TICKET_CREATED_FAILED,
  payload: error || 'Unknown error'
})

const emptyNewCreatedTicket = () => ({
  type: EMPTY_NEW_TICKET,
})

const addTickets = (tickets) => ({
  type: ADD_TICKETS,
  payload: tickets
})

// const addEventDetails = (event) => ({
//   type: ADD_EVENT_DETAILS,
//   payload: event
// })

export const createNewTicket = (price, description, picture) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  const eventId = state.eventDetails.id

  request
    .post(`${baseUrl}/events/${eventId}/tickets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ price, description, picture })
    .then(result => {
      dispatch(ticketCreatedSuccess(result.body))
    })
    .then(result => {
      dispatch(emptyNewCreatedTicket())
    })
    .then(() => {
      dispatch(getTickets())
    })
    .catch(err => {
      if (err.status === 400) {
        dispatch(ticketCreatedFailed(err.response.body.message))
      }
      else {
        console.error(err)
      }
    })
}

export const getTickets = () => (dispatch, getState) => {
  const state = getState()
  const eventId = state.eventDetails.id
  request
    .get(`${baseUrl}/events${eventId}/tickets`)
    .then(result => 
      dispatch(addTickets(result.body)))
    .catch(err => console.error(err))
}

// export const getEvent = (eventId) => (dispatch) => {
//   request
//     .get(`${baseUrl}/events/${eventId}`)
//     .then(response => {
//       dispatch(addEventDetails(response.body))
//     })
//     .catch(console.error)
// }