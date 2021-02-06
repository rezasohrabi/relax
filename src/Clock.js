import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.update();
        }, 1000);
    }

    componentDidUnmount() {
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
