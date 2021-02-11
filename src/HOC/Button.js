import HigherOrderComponent from "./HigherOrderComponent";

const Button = HigherOrderComponent(function(props) {
    return <button onClick={props.update} style={{backgroundColor: props.bgColor, color: props.color}}>
                 {props.children} - {props.counter}
            </button>
})
export default Button
