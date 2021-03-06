import { toast } from 'react-toastify'

import { constants } from '../actions/Countries'

export const ACTION_HANDLERS = {
  [`${constants.SEARCH_COUNTRIES}_FULFILLED`]: function (state, action) {
    console.log(state, action)
    console.log(action.payload)
    const { payload: { entities, result }} = action
    return {
      ...state,
      entities,
      result,
      isLoading: false
    }
  },
  [`${constants.SEARCH_COUNTRIES}_PENDING`]: function (state) {
    return {
      ...state,
      isLoading: true
    }
  },
  [`${constants.SEARCH_COUNTRIES}_REJECTED`]: function (state, action) {
    toast.error('ERROR!')
    return {
      ...state,
      isLoading: false
    }
  }
}

export const initialState = {
  isLoading: false,
  result: [],
  entities: {
    countries: {}
  }
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
