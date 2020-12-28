import { combineReducers } from 'redux'
import topicReducer from "./topicReducer"
import counterReducer from "./counterReducer"

var rootReducer = combineReducers({topicReducer, counterReducer})

export default rootReducer
