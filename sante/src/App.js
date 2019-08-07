import React from 'react';
import Event from './Event';
import Promo from './Promo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: {},
    }

    this.handleEventAdd = this.handleEventAdd.bind(this);
    this.handleEventUpdate = this.handleEventUpdate.bind(this);
  }

  handleEventAdd(key, value) {
    let events = this.state.events;
    events[key] = value;
    this.setState({
      [key]: value
    });
  }

  handleEventUpdate(key, value) {
    let events = this.state.events;
    events[key] = value;
    this.setState({
      events: events
    });
  }

  render(){
    return (
      <div>
        <header>
          <h1>Generador de Agenda Santé</h1>
        </header>
        <main>
          <Event handleEventUpdate={this.handleEventUpdate} handleEventAdd={this.handleEventAdd} events={this.state.events} />
          <Promo events={this.state.events} />
        </main>
      </div>
    );
  }
}

export default App;
