import React from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockOChange(e.target.value);
    }

    render() {
        return (
            <>
            <input 
            type='text' 
            placeholder='search...' 
            value={this.props.filterText} 
            onChange={this.handleFilterTextChange} />
            <p>
                <input type='checkbox' 
                value={this.props.inStockOnly} 
                onChange={this.handleInStockChange}/>
                {' '}
                only show products in stock
            </p>
            </>
        )
    }
}