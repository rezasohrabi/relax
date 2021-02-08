import React from 'react'
import SearchInput from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {
    render() {
        return (
            <section style={{margin: '20px', backgroundColor: '#efefef'}}>
            <SearchInput />
            <ProductTable products={this.props.products} />
            </section>
        )
    }
}