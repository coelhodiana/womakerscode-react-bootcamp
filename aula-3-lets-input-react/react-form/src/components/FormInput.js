import React from 'react'

export class FormInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }    

    handleChange(event){
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    render() {
        return (
            <div>
                <label className="form-label">{this.props.label}</label>
                <input 
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onChange={this.handleChange}

                ></input>
            </div>
        );
    }
}

export default FormInput;
