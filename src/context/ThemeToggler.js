import React from 'react'
import ThemeContext from './ThemeContext'

export default class ThemeToggler extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (<>
                    <button 
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                        Toggle Theme
                    </button>
                    </>
                )}
            </ThemeContext.Consumer>
        )
    }
}