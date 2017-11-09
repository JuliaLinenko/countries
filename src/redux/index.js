import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import countries from './reducers/Countries'

export default combineReducers({
  countries,
  form: formReducer
})
