import React from 'react'

const Search = () => {
    return (
        <div className="search-overlay">
            <div className="close"><i className="fas fa-times"></i></div>
            <form action="#">
                <input type="text" placeholder="Write what you want.." />
            </form>
        </div>
    )
}

export default Search
