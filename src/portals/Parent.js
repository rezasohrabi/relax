import React from 'react' 
import ReactDOM from 'react-dom'
import ThemeContext from '../context/ThemeContext';

export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counters: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            counters: state.counters + 1
        }))
    }

    render() {
        const theme = this.context.theme;
        return (
            <div style={{backgroundColor: theme.backgroundColor, color: theme.color}} onClick={this.handleClick}>
                <p>{this.state.counters}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}
Parent.contextType = ThemeContext;

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: 0
        }
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Child extends  React.Component {
    render() {
        return <button>click it - will propogate</button>
    }
}
