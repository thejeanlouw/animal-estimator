import React from 'react';
import FarmSummary from './FarmSummary'

const FarmList = ({farms}) => {
    return(
        <div className="farm-list section">
            {farms && farms.map(farm => {
                return(
                    <FarmSummary farm={farm} key={farm.id} />
                )
            })}
        </div>
    )
}

export default FarmList