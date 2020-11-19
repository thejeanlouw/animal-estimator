import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import basicButtonGreen from '../../Style/Common/basicButtonGreen'

const BasicButtonGreen = (props) => {
    return(
            <Button variant="contained" color="secondary" onClick={props.onClick}
            style={basicButtonGreen}>{props.children}</Button>
    )
}

export default BasicButtonGreen;