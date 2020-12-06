import fetch from 'cross-fetch'
import 'babel-polyfill'

// close dialog element about capsule
export const closeCapsule = () => ({
    type: 'CLOSE_CAPSULE'
})

// open dialog element about capsule
export const toggleCapsule = id => ({
  type: 'TOGGLE_CAPSULE',
  id
})

// fetch capsules succeed
export const receiveCapsules = json => ({
    type: 'RECEIVE_CAPSULES',
    json
})

// get capsules
export function fetchCapsules () {
    return dispatch => {
        return fetch('http://localhost:8080/v1/api/cv')
          .then(response => response.json())
          .then(json => dispatch(receiveCapsules(json)))}}

// search query
export function searchCapsules (query) {
    return dispatch => {
        return fetch('http://localhost:8080/v1/api/cv?' + query)
          .then(response => response.json())
          .then(json => dispatch(receiveCapsules(json)))}}
