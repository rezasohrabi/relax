import React from 'react'
import WithBoundaryHandling from './HOC/WithBoundaryHandling';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn : true};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
                isToggleOn : !state.isToggleOn
            }));
    }

    render() {
        if(!this.state.isToggleOn) throw new Error('error occured!');
        return (
            <>
                <button onClick={this.toggle}> {this.state.isToggleOn? 'On' : 'Off'} </button>
            </>
        )
    }
}
export default WithBoundaryHandling(ToggleButton)
