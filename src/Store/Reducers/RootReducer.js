import authReducer from './AuthReducer'
import farmReducer from './FarmReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    farm: farmReducer
})

export default rootReducer