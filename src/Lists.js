import React from 'react'

export default class Lists extends React.Component {
    render() {
        const number = this.props.numbers;
        const listItems = number.map(number => 
            <ListItem 
            key={number.toString()}
            value={number} 
            />);
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
}

class ListItem extends React.Component {
    render() {
        return <li> {this.props.value} </li>
    }
}