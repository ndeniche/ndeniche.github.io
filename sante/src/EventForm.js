import React from 'react';
import { format } from "date-fns";

var esLocale = require('date-fns/locale/es')

function FormInput(props) {
    let {label, value, id, name, onChange} = props;
    return(
        <div className="form-input">
            <input type="text" name={name} value={value} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

function DateInput(props) {
    let {label, value, id, name, onChange} = props;
    return(
        <div className="date-input">
            <label htmlFor={id}>{format(value, "dddd",{locale: esLocale})}</label>
            <label htmlFor={id}>{format(value,"D")}</label>
            <label htmlFor={id}>{format(value,"MMM",{locale: esLocale})}</label>
            <input type="date" value={value} name={name} onChange={onChange} />
        </div>
    );
}

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            title: props.title,
            subtitle: props.subtitle,
            description: props.description,
            details: props.details
        };

        this.key = props.id;

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let {date, title, subtitle, description, details} = this.state;
        let state = {date, title, subtitle, description, details};
        state[event.target.name] = event.target.value;
        this.setState(state);
        this.props.handleEventUpdate(
            this.key,
            state
        );
    }

    render() {
        return (
            <li className="event-form">
                <h3>Detalles del Evento</h3>
                <DateInput label="Fecha" value={this.state.date} name="date" id="event-date" onChange={this.handleInputChange} />
                <FormInput label="Título" value={this.state.title} name="title" id="event-title" onChange={this.handleInputChange} />
                <FormInput label="Sub Título" value={this.state.subtitle} name="subtitle" id="event-subtitle" onChange={this.handleInputChange} />
                <FormInput label="Descripción" value={this.state.description} name="description" id="event-description" onChange={this.handleInputChange} />
                <FormInput label="Detalles" value={this.state.details} name="details" id="event-detalles" onChange={this.handleInputChange} />
            </li>
        );
    }
}

export default EventForm;