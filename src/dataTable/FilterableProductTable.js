import React from 'react'
import SearchInput from './SearchBar'
import ProductTable from './ProductTable'
import ThemeContext from '../context/ThemeContext'

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
        const theme = this.context.theme;
        return (
            <section style={{margin: '20px', backgroundColor: theme.backgroundColor, color: theme.color}}>
            <SearchInput 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange} 
            onInStockChange={this.handleInStockChange} />
            <ProductTable 
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly} />
            </section>
        )
    }
}
FilterableProductTable.contextType = ThemeContext;