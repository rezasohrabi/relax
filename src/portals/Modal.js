import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.isOpen) return null;
        return (
            <>
                <header>{this.props.header}</header>
                <main>{this.props.message}</main>
                <footer>
                    <button onClick={this.props.onClose}>close</button>
                </footer>
            </>
        )
    }
}