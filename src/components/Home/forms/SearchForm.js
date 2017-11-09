import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './SearchForm.css'

let SearchForm = props => {
  const { handleSubmit } = props
  return (
    <div id="form-wrapper">
      <form onSubmit={ handleSubmit }>
        <Field id="search" name="term" component="input" type="text" placeholder="What're we looking for ?" />
        <button id="search_submit" type="submit">Search</button>
      </form>
    </div>
  )
}

SearchForm = reduxForm({
  form: 'search'
})(SearchForm)

export default SearchForm
