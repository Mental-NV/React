import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const empty = "0";

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: empty,
            buttons: [
                "7", "8", "9", "+", 
                "4", "5", "6", "-", 
                "1", "2", "3", "*", 
                "0", "C", "=", "/"
            ],
            onClick: (c) => this.handleClick(c),
            completed: false,
        };
    }
    render() {
        return (
            <div className="calc">
                <Display result={this.state.result} />
                <Keyboard buttons={this.state.buttons} onClick={this.state.onClick}/>
            </div>
        );
    }
    handleClick(c) {
        let result = this.state.result;
        let completed = this.state.completed;
        if (completed) {
            completed = false;
            result = empty;
        }
        let lastChar = result.slice(result.length - 1);
        switch (c) {
            case "C": {
                result = empty;
                break;
            }
            case "=": {
                // eslint-disable-next-line
                result = result + "=" + eval(result);
                completed = true;
                break;
            }
            case "0":
                if (result === empty) {
                    break;
                }
                if (isOperator(lastChar)) {
                    break;
                }
                // eslint-disable-next-line
            default: {
                if (isOperator(c)) {
                    if (result === empty || isOperator(lastChar)) {
                        break;
                    }
                }
                if (result === empty) {
                    result = "";
                }
                result += c;
                break;
            }
        }
        this.setState({result: result, completed: completed});
    }
}

function isOperator(c) {
    return c === "+" || c === "-" || c === "*" || c === "/";
}

function Display(props) {
    return (
        <div className="display">{props.result}</div>
    );
}

function Keyboard(props) {
    return (
        <div className="keyboard">
            <div className="row">
                <button onClick={() => props.onClick(props.buttons[0])}>{props.buttons[0]}</button>
                <button onClick={() => props.onClick(props.buttons[1])}>{props.buttons[1]}</button>
                <button onClick={() => props.onClick(props.buttons[2])}>{props.buttons[2]}</button>
                <button onClick={() => props.onClick(props.buttons[3])}>{props.buttons[3]}</button>
            </div>
                <div className="row">
                <button onClick={() => props.onClick(props.buttons[4])}>{props.buttons[4]}</button>
                <button onClick={() => props.onClick(props.buttons[5])}>{props.buttons[5]}</button>
                <button onClick={() => props.onClick(props.buttons[6])}>{props.buttons[6]}</button>
                <button onClick={() => props.onClick(props.buttons[7])}>{props.buttons[7]}</button>
            </div>
            <div className="row">
                <button onClick={() => props.onClick(props.buttons[8])}>{props.buttons[8]}</button>
                <button onClick={() => props.onClick(props.buttons[9])}>{props.buttons[9]}</button>
                <button onClick={() => props.onClick(props.buttons[10])}>{props.buttons[10]}</button>
                <button onClick={() => props.onClick(props.buttons[11])}>{props.buttons[11]}</button>
            </div>
            <div className="row">
                <button onClick={() => props.onClick(props.buttons[12])}>{props.buttons[12]}</button>
                <button onClick={() => props.onClick(props.buttons[13])}>{props.buttons[13]}</button>
                <button onClick={() => props.onClick(props.buttons[14])}>{props.buttons[14]}</button>
                <button onClick={() => props.onClick(props.buttons[15])}>{props.buttons[15]}</button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Calc />, 
    document.getElementById("root")
);