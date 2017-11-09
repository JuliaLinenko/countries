import React from 'react'

import './CountriesListItem.css'

let SearchListItem = props => {
  const { country, index } = props
  return (
    <div className="search-list-item">
      <div className="list-item-index">
        #{ index + 1 }
      </div>
      <div className="list-item-data">
        <div className="item-data">
          <strong>Match Number:</strong> { country.match_number }
        </div>

        <div className="item-data">
          <strong>Winner:</strong> { country.winner } ({ country.winner_code })
        </div>

        <div className="item-data">
          <strong>Location:</strong> { country.location }
        </div>
      </div>
    </div>
  )
}

export default SearchListItem
