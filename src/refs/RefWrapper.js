import React from 'react'
import FancyButton from './FancyButton'
import FancyInput from './FancyInput'

export default class RefWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRef = React.createRef();
        this.btnRef = React.createRef();
        this.state = {
            value: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const btn = this.btnRef.current;
        const value = this.inputRef.current.value;
        this.setState({value: value});
        btn.textContent = value;
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <FancyInput ref={this.inputRef}/>
                    <FancyButton ref={this.btnRef}>click it</FancyButton>
                </form>
                <h1>{this.state.value}</h1>
            </React.Fragment>
        )
    }
}