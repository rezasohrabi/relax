import React from 'react'

const scaleNames = {
    C: 'Celsius',
    F: 'Fahrenheit'
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'C'
        }
        this.handleCelsChange = this.handleCelsChange.bind(this);
        this.handleFarChange = this.handleFarChange.bind(this);
    }

    handleCelsChange(temp) {
        this.setState({
            temp: temp,
            scale: 'C' 
        });
    }

    handleFarChange(temp) {
        this.setState({
            temp: temp,
            scale: 'F'
        });

    }

    render() {
        const temp = this.state.temp;
        const scale = this.state.scale;
        const celsius = scale === 'F' ? tryConvert(temp, toCelsius) : temp;
        const fahrenheit = scale === 'C' ? tryConvert(temp, toFahrenheit) : temp;

        return (
            <>
                <TempInput
                scale='C' 
                temp={celsius}
                onTempChange={this.handleCelsChange} />
                <TempInput
                scale='F'
                temp={fahrenheit}
                onTempChange={this.handleFarChange} />
                <BoilingVerdict 
                celsius={parseFloat(celsius)} />
            </>
        )
    }
}

class TempInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onTempChange(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input 
                value={this.props.temp}
                onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>the water would boil</p>
    }
    return <p>the water would not boil</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}

function tryConvert(temp, convert) {
    if(Number.isNaN(temp)) {
        return '';
    }
    const output = convert(temp);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

