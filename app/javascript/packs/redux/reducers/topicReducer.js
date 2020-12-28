import axios from 'axios'

let initialState = {
  topics: []
}

let fakeData = [
  {id: 1, name: "Justin", description: "This is Justin's description"},
  {id: 2, name: "Tabernackle", description: "This is Tabernackle's description"},
  {id: 3, name: "Lyrica", description: "This is Lyrica's description"},
]

let altData = [
  {id: 1, name: "AshyElbow", description: "This is AshyElbow's description"},
  {id: 2, name: "TaberCousin", description: "This is TaberCousin's description"},
  {id: 3, name: "Cymbalta", description: "This is Cymbalta's description"},
]

const topicReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "GET_FAKE_DATA":
      return {payload: fakeData}
    case "GET_ALT_DATA":
      return {payload: altData}
    default:
      return state
  }
}

export default topicReducer
