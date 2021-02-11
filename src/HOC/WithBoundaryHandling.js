import React from 'react'

export default function WithBoundaryHandling(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }

        static getDerivedStateFromError(error) {
            return {error}
        }

        render() {
            if(this.state.error) {
                return (
                    <>
                        <h2>something went wrong</h2>
                        <details style={{whiteSpace: 'pre-wrap'}}>
                            {this.state.error.stack}
                        </details>
                    </>
                )
            }
            return <WrappedComponent 
                    {...this.state}
                    {...this.props}/>
        }
    }
}