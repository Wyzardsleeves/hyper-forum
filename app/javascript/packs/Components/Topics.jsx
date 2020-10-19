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
    .then((response) => this.setState({topics: response.data})) //this.props.dispatch.getTopics
    .catch((error) => console.log(error.message))
  }

  changeHelloMessage = () => {
    console.log("This is working");
  }

  render(){
    return(
      <section className="container">
        <div>
          <h3>Forums</h3>
          <button className="btn" onClick={() => this.props.dispatch({type: "LOG_SOMETHING_ELSE"})}>Change redux state</button><h4>{this.props.message}</h4>
        </div>
        <div>
          <ul>
            {this.state.topics.map((topic) =>
              <NavLink to={`/topics/${topic.id}/posts/`}>
                <li key={topic.id} className="card-panel">
                  <h4>{topic.name}</h4>
                  <h5>{topic.description}</h5>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </section>

    )
  }
}

const mapStateToProps = (state) => {
  return({
    message: state.message
  })
}

export default connect(mapStateToProps)(Topics)
