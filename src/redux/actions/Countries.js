import http from '../utils/http'

// Constants
export const constants = {
  SEARCH_COUNTRIES: 'SEARCH_COUNTRIES'
}

const COUNTRIES_SEARCH_URL = 'http://worldcup.sfg.io/matches/country'

// Action Creators
export const actions = {
  search: function (FIFACode) {
    return {
      type: constants.SEARCH_COUNTRIES,
      payload: {
        promise: http.get(`${COUNTRIES_SEARCH_URL}?fifa_code=${FIFACode}`)
        .then((response) => {
          return (action, dispatch) => {
            dispatch({
              ...action,
              payload: response
            })
          }
        })
      }
    }
  }
}
