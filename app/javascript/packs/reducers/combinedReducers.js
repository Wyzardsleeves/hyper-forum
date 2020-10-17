import {combineReducers} from 'redux'
import logHelloWorldReducer from './helloReducer'

const combinedReducers = combineReducers({data: logHelloWorldReducer})

export default combinedReducers
