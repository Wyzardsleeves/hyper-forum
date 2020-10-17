import React from 'react'
import Topics from './Topics'
import Posts from './Posts'
import NavBar from './NavBar'
import About from './About'
import {Switch, Route} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

const Root = () => {
  return(
    <section>
      <nav className="grey darken-2">
        <NavBar />
      </nav>
      <div>
        <Switch>
          <Route exact path="/board" component={Topics} />
          <Route path={`/board/:id/threads`} component={Posts} />
          <Route path="/about" render={About} />
        </Switch>
      </div>
    </section>
  )
}

export default Root
