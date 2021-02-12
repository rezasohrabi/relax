import React from 'react'

function HigherOrderComponent(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            }
        }

        componentDidMount() {
            console.log(this.state.counter);
        }

        componentDidUpdate() {
            console.log(this.state.counter);
        }

        update() {
            this.setState(state =>({
                counter: state.counter + 1
            }))
        }

        render() {
            return <WrappedComponent 
                    counter={this.state.counter} 
                    update={this.update.bind(this)}
                    {...this.props}
                    {...this.state}
                    />
        }
    }
}

export default HigherOrderComponent