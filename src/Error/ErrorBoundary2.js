import React from 'react'

export default class ErrorBoundary2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if(this.state.error) {
            return (
                <>
                    <h2>Something went wrong</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error.toString()}
                        <br/ >
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            )
        }
        return this.props.children;
    }
}