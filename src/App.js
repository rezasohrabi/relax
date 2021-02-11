import './App.css';
import FilterableProductTable from './dataTable/FilterableProductTable'
import React, {Suspense} from 'react'
import ThemeContext from './context/ThemeContext'
import AppTheme from './context/AppTheme'
import Theme from './context/Theme';
import RefWrapper from './refs/RefWrapper';
const LazyLoad = React.lazy(()=> import('./LazyLoad'))

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      console.log('toggle theme');
      this.setState(state => ({
        theme: 
          state.theme === AppTheme.light
          ? AppTheme.dark
          : AppTheme.light,
      }))
    }

    this.state = {
      theme: AppTheme.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render(){
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
        <Theme />
        <Suspense fallback={<div style={{color: '#fff', backgroundColor: 'red'}}>loading...</div>} >
          <LazyLoad />
        </Suspense>
        <FilterableProductTable products={PRODUCTS} />
        <RefWrapper />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
