import React from 'react'

export default class ToggleButton extends React.Component {
    constructor(args) {
        super(args);
        this.state = {isToggleOn : true};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
                isToggleOn : !state.isToggleOn
            }));
    }

    render() {
        return (
            <>
                <button onClick={this.toggle}> {this.state.isToggleOn? 'On' : 'Off'} </button>
            </>
        )
    }
}