import React from 'react'
import AppTheme from './AppTheme'
const ThemeContext = React.createContext({
    theme: AppTheme.light,
    toggleTheme: () => {}
});

export default ThemeContext