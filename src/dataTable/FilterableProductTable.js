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
    }
    render() {
        return (
            <section style={{margin: '20px', backgroundColor: '#efefef'}}>
            <SearchInput 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}/>
            <ProductTable 
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly} />
            </section>
        )
    }
}