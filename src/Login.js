import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn : false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({isLoggedIn : true});
    }

    handleLogout() {
        this.setState({isLoggedIn : false});
    }

    render() {
        if(this.state.isLoggedIn) throw new Error('I crashed!')
        // inline if-else statement
        const button = this.state.isLoggedIn ? 
         <button onClick={this.handleLogout} >Logout</button> :
         <button onClick={this.handleLogin} >Login</button>;

         return (
             <>
                {button}
                {/* inline if statement */}
                {this.state.isLoggedIn && 
                <div>
                    welcome to your dashboard
                </div>
                }
             </>
         )
    }
}