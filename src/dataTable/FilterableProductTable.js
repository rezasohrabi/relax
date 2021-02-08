import React from 'react'
import SearchInput from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText : filterText});
    }

    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly : inStockOnly});
    }
    
    render() {
        return (
            <section style={{margin: '20px', backgroundColor: '#efefef'}}>
            <SearchInput 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange} />
            <ProductTable 
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly} 
            onInStockChange={this.handleInStockChange} />
            </section>
        )
    }
}