import React from 'react'

export default class List extends React.Component{
    state={
        data: this.props.data,
        bool: false
    }
    componentDidMount(){
        console.log(this.state.data)
    }
    componentDidUpdate(prevProps){
        if(prevProps.data !== this.props.data){
            this.setState({
              data: this.props.data  
            })
        }
    }
    render(){
        const {data} = this.state
        let theItems = data.map(list=>{
            return(
                <div className="tasks" key={list.id}>
                    <h2>
                        {list.title}
                    </h2>
                    <button onClick={()=>{this.props.delete(list.id)}}>
                        delete me!
                    </button>
                </div>
                
            )
        })
        return(
            <div>
                {theItems}
            </div>
        )
    }
}