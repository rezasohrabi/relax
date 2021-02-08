import React from 'react'

export default class RowCategory extends React.Component {
    render() {
        return (
            <tr colSpan='2'>
                <th>{this.props.category}</th>
            </tr>
        )
    }
}