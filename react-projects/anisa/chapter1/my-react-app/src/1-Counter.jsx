import React, { Component } from "react";

export default class LifeCycle extends Component {

    constructor() {
        super()
        console.log('constructor')
        this.state = {
            num : 0
        }

    }
    componentDidMount() {
        console.log('first')
        setInterval(() => {
            this.setState({num : this.state.num + 1})
        } , 1000)
    }
    // componentDidUpdate () {
    //     console.log('second')
    // }
    // componentWillUnmount () {
    //     console.log('end')
    // }
    render() {
        console.log('rednder')
        return (
            <>
                <div>Soheil</div>
                <h1>{this.state.num}</h1>
            </>
        )
    }
}