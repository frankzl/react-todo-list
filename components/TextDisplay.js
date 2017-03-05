import React, {Component} from 'react'

class TextDisplay extends Component {

    constructor(props, context) {
        super(props, context)
    }

   handleClick(event){
       console.log("yo")
        this.props.deleteLetter();
   }

    render(){
        return(
            <div>
                <div>input:{this.props.text}</div>
                <button onClick={this.handleClick.bind(this)}> Yoyo</button>
            </div>
        )
    }
}

export default TextDisplay
