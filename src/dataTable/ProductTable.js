import React from 'react'
import RowCategory from './RowCategory'
import ProductItem from './ProductItem'

export default class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if(product.category != lastCategory) {
                rows.push(
                    <RowCategory 
                    category={product.category} 
                    key={product.category}/>
                );
            }
            rows.push(
                <ProductItem 
                key={product.name}
                product={product} />
            );
            lastCategory = product.category;
        });
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}