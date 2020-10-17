import React, {Component} from 'react'
import axios from 'axios'

class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      user: {
        name: "Justin",
        avatar: "http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
        age: 31,
      }
    }
  }

  componentWillMount(){
    this.getPosts(this.props.match.params.id);
    console.log(this.props)
  }

  getPosts = (id) => {
    axios.get(`/topics/${id}/posts/`)
    .then((response) => this.setState({posts: response.data}))
    .catch((error) => alert(error.messsage))
  }

  makePost = () => {
    console.log(this.refs.new_post_content.value)
  }

  render(){
    return(
      <section className="container">
        <div>
          <h3>This is from the Posts.</h3>
        </div>
        <div>
          <ul>
            {this.state.posts.map((post) =>
              <NavLink to={`/board/${topic.id}/threads`}>
                <li key={post.id} className="card-panel">
                  <h5>{post.title}</h5>
                  <p>{post.content}</p>
                </li>
              </NavLink>

            )}
            <li className="card-panel">
              <form>
                <input className="input-field" type="text" placeholder="Comment here..." name="new_post_content" ref="new_post_content"/>
                <input className="btn btn-primary" value="Submit" type="button" onClick={this.makePost} />
              </form>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Posts
