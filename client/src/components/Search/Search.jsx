import React from 'react';
import "./Search.css";


const Search = () => {
    return ( 
        <div className="search-container">
            <div className="search-bar">
                <i className="fa fa-search" aria-hidden="true" /> 
                <input type="text" name="search" placeholder="Browse Contests by keywords..."></input>
            </div>
        </div>
     );
}
 
export default Search;