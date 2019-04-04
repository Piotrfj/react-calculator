import React, { Component } from 'react';
import Button from './Button';
import './Interface.css'
class Interface extends Component {
    state = {}
    buttonsValues = {
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."],
        basics: ["/", "*", "-", "+",],
    }
    render() {
        const numberButtons = this.buttonsValues.numbers.map(num => <Button key={num} click={this.props.click} value={num} />)
        const basicsButtons = this.buttonsValues.basics.map(num => <Button key={num} click={this.props.click} value={num} />)
        return (
            <div className={"interface"}>
                <div className={"btn-container basics1"}>
                    <Button click={this.props.click} value={"("} />
                    <Button click={this.props.click} value={")"} />
                    <Button click={this.props.click} value={"%"} />
                    <Button click={this.props.delete} value={"C"} />
                </div>
                <div className={"btn-container numbers"}>
                    {numberButtons}
                    <Button click={this.props.submitClick} value={"="} />

                </div>
                <div className={"btn-container basics"}>{basicsButtons}</div>

            </div>
        );
    }
}

export default Interface;