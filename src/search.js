import React from 'react';

// const Search = props => {
//     return(
//         <input type="search" onChange={this.onchangehandler} />
//     );
// };

const Search = function(props) {
    const {handleChange} = props;
    return(
        <input type="search" onChange={handleChange} />
    );
};

export default Search;
