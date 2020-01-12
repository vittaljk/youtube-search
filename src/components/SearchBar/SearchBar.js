import React from 'react'
// import PropTypes from 'prop-types'
import './SearchBar.css';
import searchIcon from '../../assets/search.png';

function SearchBar({ onSearch }) {
    const handleSearchInputChanges = ({ target: { value }}) => {
        onSearch(value);
    }

    return (
        <div className="search-container">
            <input
                className="search-input" 
                type="text" 
                placeholder="Search"
                onChange={handleSearchInputChanges}
            />
            <div className="search-icon-wrapper"><img className="search-icon" src={searchIcon} alt="search icon"/></div>
        </div>
    )
}

// SearchBar.propTypes = {

// }

export default SearchBar

