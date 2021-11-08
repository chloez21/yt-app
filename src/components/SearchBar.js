import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
    const[term, setTerm]=useState('');
    
    const onSubmit=(evt)=>{
        evt.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="filed">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={(evt) => setTerm(evt.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
