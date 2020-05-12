import React, { Component } from 'react'

class Foods extends Component {
    render(props) {
        return (
            <div>
              <h1>{this.props.pasta}</h1> 
              <button onClick={this.props.click}>Delete food</button>
            </div>
        )
    }
}

export default Foods;