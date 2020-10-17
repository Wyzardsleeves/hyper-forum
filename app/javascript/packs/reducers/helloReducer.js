import axios from 'axios'

function getTopics(){
  axios.get('/topics')
  .then((resposne) => console.log(response.data))
  .catch((error) => console.log(error.message))
}

let initState = {
  message: "This is a message from the actual Reducer"
}

const helloReducer = (state = initState, action) => {
  console.log(action)
  switch(action.type){
    case "LOG_HELLO":
      return {
        ...state,
        message: "Log hello logged from helloReducer.js!"
      }
    case "LOG_SOMETHING_ELSE":
      return {
        ...state,
        message: "Log something else logged from helloReducer.js!"
      }
    default:
      return state
  }
}

export default helloReducer
