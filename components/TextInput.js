import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: "state.inputT"
        }
    }

    deleteLetter(){
        var str = this.state.inputText
        console.log(str)
        this.setState( {
            inputText: str.substr(0, str.length-1)
        })
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({
            inputText: event.target.value
        })
    }

    render(){
        return (
            <div>
                <input 
                type="text" 
                value={this.state.inputText}
                onChange={this.handleChange.bind(this)}
                />
            <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
            </div>
        )
    }
}

export default TextInput
