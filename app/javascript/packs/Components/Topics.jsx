import React, {Component} from 'react'
import '../assets/styles/topics.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

//redux
import {connect} from 'react-redux'

class Topics extends Component { //boards
  constructor(props){
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount(){
    this.getTopicList()
    console.log(this.props)
  }

  getTopicList = () => {
    axios.get('/topics/')
    .then((response) => this.setState({topics: response.data}))
    .catch((error) => console.log(error.message))
  }

  addNum = () => {
    console.log("addnum triggered")
    this.props.dispatch({type: "INCREMENT"})
  }

  subtractNum = () => {
    console.log("subtractnum triggered")
    this.props.dispatch({type: "DECREMENT"})
  }

  loadPropTopics = () => {
    this.props.dispatch({type: "GET_FAKE_DATA"})
  }


  render(){
    return(
      <section className="container">
        <div>
          <h3>Forums</h3>
          <div>
            <button onClick={this.subtractNum}>-</button>
            <h5>{this.props.count}</h5>
            <button onClick={this.addNum}>+</button>
          </div>
        </div>
        <div>
          <ul>
            {this.state.topics.map((topic) =>
              <NavLink key={topic.id} to={`/topics/${topic.id}/posts/`}>
                <li key={topic.id} className="card-panel">
                  <h4>{topic.name}</h4>
                  <h5>{topic.description}</h5>
                </li>
              </NavLink>
            )}
            {this.props.topics && this.props.topics.map((topic) =>
              <li key={topic.id} className="card-panel">
                <h4>{topic.name}</h4>
                <h5>{topic.description}</h5>
              </li>
            )}
            <button onClick={this.loadPropTopics}>Load More...</button>
          </ul>
        </div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    count: state.counterReducer.count,
    topics: state.topicReducer.payload
  })
}

const mapDispatchToProps = {
  // ... normally is an object full of action creators
}

export default connect(mapStateToProps /* ,mapDispatchToProps */)(Topics)
