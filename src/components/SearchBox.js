import React from 'react';

const SearchBox = ({SearchChange}) => {
    return(
        <div className = "pa2">
            <input type="text" placeholder="Search Robots" className = "pa3 ba bg--green bg-lightest-blue" onChange = {SearchChange}/>
        </div>
    )
}

export default SearchBox;