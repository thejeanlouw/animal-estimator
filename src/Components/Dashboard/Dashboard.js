import React, {Component} from 'react'
import Notifications  from "./Notifications";
import FarmList from '../Farm/FarmList'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <FarmList farms={this.props.farms}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        farms: state.farm.farms
    }
}

export default connect(mapStateToProps)(Dashboard)