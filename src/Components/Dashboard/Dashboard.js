import React, {Component} from 'react'
import Notifications  from "./Notifications";
import FarmList from '../Farm/FarmList'
import {connect} from 'react-redux'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import '../../config/fbConfig'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'



class Dashboard extends Component{
    render(){
        debugger;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <FarmList farms={this.props.userfarms}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications store={this.props.store} auth={this.props.auth}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userfarms: state.farmRedux.farms
    }
}

export default connect(mapStateToProps)(Dashboard)