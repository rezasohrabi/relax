import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ToggleButton from "./ToggleButton";
import Login from './Login'
import Lists from './Lists'
import Form from './Form'
import Calculator from './Calculator';
import SignupDialog from './SignupDialog';

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
    </div>
  );
}

export default App;
