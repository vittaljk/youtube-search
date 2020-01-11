import React from 'react'
// import PropTypes from 'prop-types'

function SearchBar({ onSearch }) {
    const handleSearchInputChanges = ({ target: { value }}) => {
        onSearch(value);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search"
                onChange={handleSearchInputChanges}
            />
        </div>
    )
}

// SearchBar.propTypes = {

// }

export default SearchBar

