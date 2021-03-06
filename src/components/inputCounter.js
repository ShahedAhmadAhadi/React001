import React, { Component } from 'react'
import './style.css'

class inputCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: '',
            num : 0,
            wrong: ''
        }
    }

    in = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    

    add = () => {
        let text = this.state.value
        if (text.toLowerCase() === 'reset') {
            this.setState({
                num: 0,
                value: ''
            })
        } else {
            if (parseFloat(text)){
                this.setState({
                    num: this.state.num + parseFloat(text),
                    value: '',
                    wrong: ''
                })
            }else if(text === '0') {
                this.setState({
                    num:this.state.num + parseFloat(text),
                    value: '',
                    wrong: ''
                })
            } else {
                this.setState({
                    wrong: 'You have entered a non numeric character',
                    value: ''
                })
            }
        }
        
    }

    enter = (e) => {
        console.log(e);
        if (e.charCode === 13) {
            this.add()
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <input value={this.state.value} onChange={this.in} onKeyPress={this.enter}/>
                <button onClick={this.add}>Add</button>
                <p className="red">{this.state.wrong}</p>
            </div>
        )
    }
}

export default inputCounter
