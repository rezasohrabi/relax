import React from 'react'
import Clock from './Clock';
import ToggleButton from "./ToggleButton";
import Login from './Login'
import Lists from './Lists'
import Form from './Form'
import Calculator from './Calculator';
import SignupDialog from './SignupDialog';

export default class LazyLoad extends React.Component { 
    render() {
        return (
            <>
                <Clock />
                <ToggleButton />
                <Login />
                <Lists numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <Form />
                <Calculator />
                <SignupDialog />
            </>
        )
    }
}