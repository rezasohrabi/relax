import { findByLabelText } from '@testing-library/react';
import React from 'react'
import ThemeContext from './context/ThemeContext';

export default class Form extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: '',
            interest: 'Car' 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert(this.state.username + ' ' + 
        this.state.comment + ' ' + 
        this.state.interest);
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        const theme = this.context.theme;
        const style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: theme.backgroundColor,
            color: theme.color
        }
        if (this.state.username === 'error') throw new Error('I crashed!');
        return (
            <form onSubmit={this.handleSubmit} style={style} >
                <label>
                    Username:
                    <input
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    type='text'
                    />
                </label>
                <label>
                    comment:
                    <textarea
                    name='comment' 
                    value={this.state.comment}
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    interesting:
                    <select name='interest' value={this.state.interest} onChange={this.handleChange}>
                        <option value='Car'>Car</option>
                        <option value='Office'>Office</option>
                        <option value='Home'>Home</option>
                        <option value='Xbox'>Xbox</option>
                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
Form.contextType = ThemeContext;