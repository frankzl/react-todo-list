import React from 'react'
import {render, method1} from 'react-dom'
import App from '../components/App'

render(
    //define the compassing component
    // Dom element we want to mount it to
    <App/>, document.getElementById('app')
)
