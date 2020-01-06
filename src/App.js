import React, {Component} from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    )
  }
}

function App() {
  return (
    <div>
      <Subject></Subject>
    </div>
  );
}

export default App;
