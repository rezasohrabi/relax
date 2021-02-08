import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <>
            <input 
            type='text' 
            placeholder='search...' 
            value={this.props.filterText} />
            <p>
                <input type='checkbox' 
                value={this.props.inStockOnly} />
                {' '}
                only show products in stock
            </p>
            </>
        )
    }
}