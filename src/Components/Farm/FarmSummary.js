import React from 'react';

const FarmSummary = ({farm}) => {
    return(
        <div className="card z-depth-0 farm-list-summary">
            <div className="card-content grey-text text-darken-3">
            <span className="card-title">
                {farm.title}
            </span>
            <p>Owned by {farm.company}</p>
            <p className="grey-text">24 September, 3pm</p>
            </div>
        </div>
    )
}

export default FarmSummary