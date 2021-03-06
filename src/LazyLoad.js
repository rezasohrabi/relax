import React from 'react'
import Clock from './Clock';
import ToggleButton from "./ToggleButton";
import Login from './Login'
import Lists from './Lists'
import Form from './Form'
import Calculator from './Calculator';
import SignupDialog from './SignupDialog';
import ErrorBoundary from './Error/ErrorBoundary';
import ErrorBoundary2 from './Error/ErrorBoundary2';
import Button from './HOC/Button';
import Label from './HOC/Label';

export default class LazyLoad extends React.Component { 
    render() {
        return (
            <>
                <Clock />
                <Button bgColor='#3323ee' color='#fff'>button</Button>
                <Label>label</Label>
                <ToggleButton />
                <ErrorBoundary2>
                    <Login />
                </ErrorBoundary2>
                <Lists numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <ErrorBoundary>
                    <Form />
                </ErrorBoundary>
                <Calculator />
                <SignupDialog />
            </>
        )
    }
}