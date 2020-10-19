import React, {Component} from 'react'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state = {
      comments: []
    }
  }

  render(){
    return(
      <div>
        <section>
          <h3>
            Post Name
          </h3>
        </section>
        <section>
          <div>Comments list</div>
          <div>
            <ul>
              {this.state.comments.map((comment) =>
                <li key={comment.id}>
                  <p>{comment.message}</p>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Comments
