import React from 'react'
import ReactDOM from 'react-dom'
import ThemeContext from '../context/ThemeContext';

export default class PortalModal extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;

    render() {
        if(!this.props.isOpen) return null;
        const theme = this.context.theme;
        return (
            ReactDOM.createPortal(
                <div style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                    <header>{this.props.header}</header>
                    <main>{this.props.message}</main>
                    <footer>
                        <button onClick={this.props.onClose} >close</button>
                    </footer>
                </div>,
                document.body
            )
        )
    }
}
