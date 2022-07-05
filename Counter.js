import React, {Component} from "react"

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count +1
        }) 
    }
    decrement() {
        this.setState({
            count: this.state.count -1
        }) 
    }
    reset() {
        this.setState({
            count: this.state.count =0
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button id="reset-btn" onClick={()=> this.reset()}>Reset</button>
                <button id="inc-btn" onClick={()=> this.increment()}>Increment ++</button>
                <button id="dec-btn" onClick={()=> this.decrement()}>Decrement --</button>
            </div>
        )
    }
}

export default Counter