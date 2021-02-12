import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.date !== nextState.date) {
            return true;
        }
        return false;   
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.update();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    update() {
        this.setState({date : new Date()});
    }

    render() {
        return (
            <>
                {this.state.date.toLocaleTimeString()}
            </>
        )
    }
}
