import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ToggleButton from "./ToggleButton";
import Login from './Login'
import Lists from './Lists'
import Form from './Form'
import Calculator from './Calculator';
import SignupDialog from './SignupDialog';
import FilterableProductTable from './dataTable/FilterableProductTable'

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="App">
      <Clock />
      <ToggleButton />
      <Login />
      <Lists numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Form />
      <Calculator />
      <SignupDialog />
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
