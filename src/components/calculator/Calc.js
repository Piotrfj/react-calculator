import React, { Component } from 'react';
import './Calc.css';
import * as math from 'mathjs'
import Result from './Result';
import Input from './Input';
import Interface from './Interface';

class Calc extends Component {

  state = {
    value: "",
    result: "",
  }

  availableCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "%",]

  componentDidMount = () => {
    window.addEventListener('keydown', this.handlePress);
  }
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handlePress);
  }
  deleteLastChar = () => {
    if (this.state.value.length > 0)
      this.setState({
        value: this.state.value.slice(0, -1),
      })
  }

  handlePress = (e) => {
    // console.log(e);
    const { key, keyCode } = e;
    let value = this.state.value;
    if (keyCode === 8) { //backspace
      return this.deleteLastChar();
    }
    else if (keyCode === 13) { //enter
      return this.calculateResult();
    }
    else if (key === "." || key === ",") { //comma and dot works the same
      value += '.';
    } else if (this.availableCharacters.indexOf(key) !== -1) {
      value += key;
    }
    this.setState(prevState => ({
      value,
    }))

  }
  calculateResult = () => {
    let res;
    try {
      res = math.eval(this.state.value);
    } catch (error) {
      return this.setState({
        result: "Niepoprawne wyrażenie",
      })
    }
    this.setState({
      result: res,
      value: "",
    })

  }

  handleClick = char => {
    this.setState({
      value: this.state.value + char,
    })
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calc" >
        <Result res={result} />
        <Input value={this.state.value} />
        <Interface
          click={this.handleClick}
          submitClick={this.calculateResult}
          delete={this.deleteLastChar}
        />
      </div>
    );
  }
}

export default Calc;
