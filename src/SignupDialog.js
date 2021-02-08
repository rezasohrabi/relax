import React from 'react'

export default class SignupDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <Dialog 
            title='Wanna get informed?'
            message='sign  up for free'>
                <input 
                value={this.state.login}
                onChange={this.handleChange} />
                <button onClick={this.handleSubmit} >Sign up!</button>
            </Dialog>
        )
    }

    handleChange(e) {
        this.setState({login : e.target.value});
    }

    handleSubmit(e) {
        alert(`welcome to your dashboard, dear ${this.state.login}`);
        e.preventDefault();
    }

}

class Dialog extends React.Component {
    render() {
        return (
            <FancyBorder >
                <h2>{this.props.title}</h2>
                <hr />
                <p>{this.props.message}</p>
                <div>{this.props.children}</div>
            </FancyBorder>
        )
    }
}

class FancyBorder extends React.Component {
    render() {
        const style = {
            border: '1px solid #999',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#888'
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}






