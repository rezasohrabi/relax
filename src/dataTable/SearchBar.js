import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <>
            <input type='text' placeholder='search...' />
            <p>
                <input type='checkbox' />
                {' '}
                only show products in stock
            </p>
            </>
        )
    }
}