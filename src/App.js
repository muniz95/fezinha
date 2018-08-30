import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.generate = this.generate.bind(this);

    this.state = {
      numbers: []
    };
  }
  
  generate(e) {
    e.preventDefault();
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 60 + 1))
    }
    this.setState({
      numbers: [...numbers].sort((a, b) => a - b)
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          { this.state.numbers.map(number => 
            <div>{number}&nbsp;</div>
          ) }
        </div>
        <button onClick={this.generate} style={{width: '100%'}}>Gerar</button>
      </div>
    );
  }
}

export default App;
