import React, { Component } from 'react'
import '../States.css'

export default class StateinclassComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sarath",
             count:0
        }
    }
    
    render() {

        // // setTimeout(()=>{
        // //     this.setState({
        // //         count:"4"
        // //     })
        // },3000)
        return (
            <div className='demo'>
                <h1>Hello this is {this.state.count}</h1>
                {/* <h1>count is {this.state.count}</h1> */}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment</button>
                <br></br>
               <button onClick={()=>{
                   this.setState({
                       count:this.state.count-1
                   })
               }}>Decrement</button>
               <br></br>
               <button onClick={()=>{
                   this.setState({
                       count:0
                   })
               }}>Reset</button>
            </div>
        )
    }
}
