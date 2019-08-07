import React from 'react';
import Event from './Event';
import Promo from './Promo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: {
        '0': {
          date: new Date('08/06/2019'),
          title: "Concierto Benéfico",
          subtitle: "Elías Espinal - La Guagua - Indecentes - Linda Perdomo",
          description: "A beneficio del pequeño Jonatan Reyes",
          details: "7 PM Donación L100"
        },
        '1': {
          date: new Date('08/07/2019'),
          title: "Buscando a la Guzmán Hondureña",
          subtitle: "Eliminatoria 1",
          description: "Súper karaoke Go TV - Cantá y Ganá L. 10,000",
          details: "9 PM Entrada Gratis"
        },
        '2': {
          date: new Date('08/08/2019'),
          title: "Concierto",
          subtitle: "Bárbara Lavaire",
          description: "y los Músicos Robados",
          details: "9 PM Cover L100"
        },
        '3': {
          date: new Date('08/09/2019'),
          title: "Tributo",
          subtitle: "Ricardo Arjona",
          description: "Presenado por Acústikos",
          details: "9 PM Cover L100"
        },
        '4': {
          date: new Date('08/10/2019'),
          title: "Tributo",
          subtitle: "Foo Fighters y Nirvana",
          description: "Presentado por Etherea",
          details: "9 PM Cover L100"
        },
      },
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
