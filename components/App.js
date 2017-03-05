import React, { Component } from 'react'
import TextInput from './TextInput'

class App extends Component {

    render() {
        return ( 
            <div className="app">
                <div>This is definitely a hot (module reloading) React app now!</div>
                <div>This is another line</div>
                <TextInput/>
            </div>
        )
    }

}

export default App
