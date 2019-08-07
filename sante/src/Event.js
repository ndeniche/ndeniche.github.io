import React from 'react';
import EventForm from './EventForm';

function getEvent() {
    return {
        date: new Date(),
        title: "",
        subtitle: "",
        description: "",
        details: ""
    }
}

function EventAdd(props) {
    return(
        <li className="event-add" onClick={props.onClick}>
            +
        </li>
    );
}

class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: props.events
        }

        this.addEvent = this.addEvent.bind(this);
    }

    componentDidMount() {
        //this.addEvent();
    }

    addEvent() {
        /*this.setState(state => {
            const events = [...state.events, getEvent()];
            return {events};
        });*/
        console.log(this.props);
        this.props.handleEventAdd(
            Object.keys(this.state.events).length, 
            getEvent()
        );
    }

    render() {
        return (
            <ul className="event-container">
                {Object.keys(this.state.events).map(e => 
                    <EventForm key={e} 
                               id={e}
                               title={this.state.events[e].title} 
                               subtitle={this.state.events[e].subtitle} 
                               description={this.state.events[e].description} 
                               details={this.state.events[e].details} 
                               date={this.state.events[e].date}
                               handleEventUpdate={this.props.handleEventUpdate} />
                )}
                <EventAdd onClick={this.addEvent} />
            </ul>
        );
    }
}

export default Event;