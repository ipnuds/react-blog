import React from 'react'

const SearchBar = props => {
    return (
        <div>
            <input 
             type='text' 
             placeholder="search here"
             value={props.search}
             
             onChange={props.onChangeSearch}
             />
        </div>
    )
}

export default SearchBar