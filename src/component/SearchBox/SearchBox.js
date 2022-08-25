import React from "react";

function SearchBox({searchChange}) {

    return(
        <div className="mb2">
            <input type="search" placeholder="search robot" className="pa3 ba b--green bg-lightest-blue"
            onInput={searchChange}/>
        </div>
    )
}

export default SearchBox;