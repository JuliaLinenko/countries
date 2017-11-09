import { normalize, schema } from 'normalizr'

import http from '../utils/http'

const countrySchema = new schema.Entity('countries', {}, {
  idAttribute: 'match_number'
})

// Constants
export const constants = {
  SEARCH_COUNTRIES: 'SEARCH_COUNTRIES'
}

const COUNTRIES_SEARCH_URL = 'http://worldcup.sfg.io/matches/country'

// Action Creators
export const actions = {
  search: function (FIFACode) {
    return (dispatch, getState) => dispatch({
      type: constants.SEARCH_COUNTRIES,
      payload: http
        .get(`${COUNTRIES_SEARCH_URL}?fifa_code=${FIFACode}`)
        .then(response => response.json())
        .then(data => normalize(data, [ countrySchema ]))
    })
  }
}
