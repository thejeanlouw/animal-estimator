import authReducer from './AuthReducer'
import farmReducer from './FarmReducer'
import {combineReducers} from 'redux'
import 'firebase/firestore'
import {
  firebaseReducer
} from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    authRedux: authReducer,
    farmRedux: farmReducer
})

export default rootReducer