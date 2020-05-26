import React from 'react'
import {connect} from 'react-redux'
import {searchLogs} from '../redux/actions/logs'

const SearchBar = ({searchLogs}) => {
  return (
    <nav style={{marginBottom: 30}} className='blue'>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" onChange={e => searchLogs(e.target.value)} placeholder='Search logs...' />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default connect(null, {searchLogs})(SearchBar)
