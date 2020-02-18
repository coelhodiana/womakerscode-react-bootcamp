// import React, { Components } from 'react'

class Button extends React.Component {
    constructor (props) {
        super(props)
        this.state {
            disabled: false,
            // title: {
            //     text: '1234',
            //     color: 'red'
            // }
        }
    }

    componentDidMount(){
        console.log('oi')
    }

    componentDidUpdate(){
        console.log('oi')
    }

    userCliked = () => this.setState({
        disabled: !disabled
    })

    render ({ 
        return(
            <button disabled={this.state.disabled}>Click Me</button>
        )
    })
}