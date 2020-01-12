import React from 'react'
import './SearchBar.css';
import searchIcon from '../../assets/search.png';
import { DebounceInput } from 'react-debounce-input';

function SearchBar({ onSearch }) {
    const handleSearchInputChanges = ({ target: { value }}) => {
        onSearch(value);
    }

    return (
        <div className="search-container">
            <DebounceInput
                placeholder="Search"
                debounceTimeout={300}
                onChange={handleSearchInputChanges} />
            <div className="search-icon-wrapper"><img className="search-icon" src={searchIcon} alt="search icon"/></div>
        </div>
    )
}

export default SearchBar

