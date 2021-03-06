// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {HashRouter} from 'react-router-dom'
import Root from './Components/Root'
import './assets/styles/App.css'

//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Root />
      </HashRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
