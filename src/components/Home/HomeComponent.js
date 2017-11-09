import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import SearchForm from './forms/SearchForm'
import CountriesListItem from './CountriesListItem'
import { actions } from './../../redux/actions/Countries'
import './HomeComponent.css'

class HomeComponent extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    countries: PropTypes.shape({
      result: PropTypes.array.isRequired,
      entities: PropTypes.object.isRequired,
      isLoading: PropTypes.bool
    }).isRequired
  }

  submit = (values) => {
    const { actions: { search }} = this.props
    const { term } = values
    search(term)
  }

  render() {
    const { countries: { result, entities: { countries }}, isLoading } = this.props

    return (
      <div className="app-container">
        <header className="app-header">
          <SearchForm onSubmit={this.submit} />

        </header>
        <div className="countries-list">
          {
            // Loading indicator animated icon
            isLoading && <i className="fa fa-spinner faa-spin animated" aria-hidden="true"></i>
          }

          {
            // Output search results
            result.map(
              (matchId, index) =>
                <CountriesListItem
                  key={index}
                  index={index}
                  country={countries[matchId]} />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.countries.isLoading,
  countries: state.countries
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
