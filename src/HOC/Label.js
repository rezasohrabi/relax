import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label onMouseMove={this.props.update}> 
                {this.props.counter} - {this.props.children}
            </label>
        )
    }
}
export default HigherOrderComponent(Label)