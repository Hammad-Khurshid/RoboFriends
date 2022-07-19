import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
    return ( <
        div className = "pa1" >

        <
        input className = "pa2 ba  b--purple bg-silver"
        type = 'Search'
        placeholder = 'search robots'
        onChange = { searchChange }
        /> < /
        div >
    );
}

export default Searchbox;