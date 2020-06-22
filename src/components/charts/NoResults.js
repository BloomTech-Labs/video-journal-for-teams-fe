import React from 'react';

const NoResults = () => {
    return (
        <div className = 'noResults' style={{ backgroundColor:'#F5F5F5', color: '#FF7F50', width: 600 }}>
            <h1>Sorry, results are still processing, please come back later....</h1>
        </div>
    )
}

export default NoResults;