import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import List from './list'

class App extends React.Component{
  state={
    text: 'i love dogs',
    data: [
      {
        id: uuidv4(),
        title: 'get sanitizer',
      },
      {
        id: uuidv4(),
        title: 'get sanitizer 2',
      },
      {
        id: uuidv4(),
        title: 'get sanitizer 3',
      }
    ],
    value: ''
  }
  handleClick=()=>{
    let newArray = this.state.data
    if(this.state.value){
      newArray.push({
        id: uuidv4(),
        title: this.state.value
      })
      this.setState({
        data: newArray
      })
    }

  }

  deleteComponent=(id)=>{
    let newTask = this.state.data
    let tasklist = newTask.filter(x => {
      return x.id !== id;
    })
    // console.log({id, tasklist})
    this.setState({
      data: tasklist
    })
  }

  handleInput=(e)=>{
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
      <div className="parent">
      <input value={this.state.value} onChange={this.handleInput} />
        <button onClick={this.handleClick}>
          Add
        </button>
        <div className="children"> 
          <List data={this.state.data} delete={this.deleteComponent} />
        </div>
      </div>
    )
  }
}

export default App