import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      comments:[]
    }
  }

  componentDidMount=()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(resonpse=>
      this.setState({
        comments:resonpse.data
      })
    )

     
  }
    render(){
      return(

          <div className="App">
            <h1>User Comments</h1>
            {this.state.comments.map((item)=>{
              return( 
              <div className="divStyle" key={Math.random()}>
              
              <div> {item.id} </div>
              <div> {item.name} </div>
              <div> {item.email} </div>
              <div> {item.body} </div>
             
              
              </div>
              )
            })}
          </div>
        )
    }

}

export default App;
