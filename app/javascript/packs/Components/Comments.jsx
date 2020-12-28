import React, {Component} from 'react'
import axios from 'axios'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.getComments()
  }

  getComments = () => {
    axios.get(`/topics/${this.props.location.commentProps}/posts/${this.props.match.params.id}/comments`)
    .then((response) => this.setState({comments: response.data}))
    .catch((error) => console.log(error.message))
  }

  addComment = () => {
    console.log(this.refs.new_comment_content.value)
    axios.post(`/topics/${this.props.location.commentProps}/posts/${this.props.match.params.id}/comments`,{
      content: this.refs.new_comment_content.value,
      post_id: this.props.match.params.id
    })
    .then((response) => this.setState({comments: response.data}))
    .catch((error) => console.log(error.message))
  }

  render(){
    return(
      <section className="container">
        <div>
          <h3>Comments list</h3>
        </div>
        <div>
          <ul>
            {this.state.comments.map((comment) =>
              <li className="card-panel" key={comment.id}>
                <p>{comment.content}</p>
              </li>
            )}
            <li className="card-panel">
              <form>
                <input className="input-field" type="text" placeholder="Comment here..." name="new_post_content" ref="new_comment_content"/>
                <input className="btn btn-primary" value="Submit" type="button" onClick={this.addComment} />
              </form>
            </li>

          </ul>
        </div>
      </section>
    )
  }
}

export default Comments
