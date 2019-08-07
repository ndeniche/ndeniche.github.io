import React from 'react';
import {format} from 'date-fns';

var esLocale = require('date-fns/locale/es');

class Promo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            changeTrigger: props.changeTrigger,
            events: props.events
        }

        this.colors = [
            '#FB9218',
            '#EB0630',
            '#31F308',
            '#17AFED',
            '#E5FB0A'
        ];

        this.canvasSize = 1080;
        this.totalHeight = this.canvasSize * .75;
        this.y = this.canvasSize * .18;
        this.x = this.canvasSize * .06;
        this.eHeight = this.canvasSize * .1;

        this.draw = this.draw.bind(this);
        this.getProperties = this.getProperties.bind(this);
    }

    componentDidMount() {
        this.draw();
    }

    getProperties() {
        return {
            padding: (this.totalHeight - (this.eHeight * Object.keys(this.state.events).length))/5,
        };
    }

    draw() {
        var ctx = document.getElementById('canvasPromo').getContext('2d');

        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,this.canvasSize,this.canvasSize);

        var {padding} = this.getProperties();

        var img = new Image(),
            footer = new Image(),
            cs = this.canvasSize;
        
        img.onload = function() {
            var propx = 520/800,
                propy = 100/800,
                sizex = propx * cs,
                sizey = propy * cs;
            ctx.drawImage(img, (cs - sizex)/2, (cs/100), sizex, sizey);
            ctx.fill();
        };

        footer.onload = function() {
            var propx = 1080/1080,
                propy = 85/1080,
                sizex = propx * cs,
                sizey = propy * cs;
            ctx.drawImage(footer, 0, cs - sizey, sizex, sizey);
            ctx.fill();
        }
        img.src = process.env.PUBLIC_URL + '/logo.png';
        footer.src = process.env.PUBLIC_URL + '/footer.png';

        Object.keys(this.state.events).forEach((c,i) => {
            let e = this.state.events[c];

            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.textBaseline = 'hanging';

            // dia
            ctx.font = (this.canvasSize * 0.02) + 'px Roboto';
            ctx.fillText(format(e.date,'dddd',{locale: esLocale}).toUpperCase(), (this.x), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.02)));

            // mes
            ctx.font = (this.canvasSize * 0.04) + 'px Roboto';
            ctx.fillText(format(e.date,'MMMM',{locale:esLocale}).toUpperCase(), (this.x + (this.canvasSize * 0.06)), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.04)), this.eHeight * 2);

            // subtitle
            ctx.font = 'bold ' + (this.canvasSize * 0.036) + 'px Roboto Condensed';
            ctx.fillText(e.subtitle.toUpperCase(), (this.x + this.eHeight * 2.8), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.03)), (this.canvasSize * 0.6));

            // description
            ctx.font = '' + (this.canvasSize * 0.02) + 'px Roboto Condensed';
            ctx.fillText(e.description.toUpperCase(), (this.x + this.eHeight * 2.8), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.03) + (this.canvasSize * 0.036)), (this.canvasSize * 0.6));

            ctx.fillStyle = this.colors[i];

            // fecha
            ctx.font = 'bold ' + (this.canvasSize * 0.04) + 'px Roboto';
            ctx.fillText(format(e.date,'DD'), (this.x), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.04)));

            // title
            ctx.font = (this.canvasSize * 0.03) + 'px Roboto';
            ctx.fillText(e.title.toUpperCase(), (this.x + this.eHeight * 2.8), (this.y + (i * this.eHeight) + (i * padding)));

            ctx.fillStyle = '#444';

            // details
            ctx.font = 'bold ' + (this.canvasSize * 0.03) + 'px Roboto';
            ctx.fillText(e.details.toUpperCase(), (this.x + this.eHeight * 2.8), (this.y + (i * this.eHeight) + (i * padding) + (this.canvasSize * 0.03) + (this.canvasSize * 0.036) + (this.canvasSize * 0.022)), (this.canvasSize * 0.6));
        });

        ctx.fill();
    }

    download() {
        let canvas = document.getElementById('canvasPromo');
        window.open(canvas.toDataURL("image/png"));
    }

    render() {
        return(
            <div>
                <button onClick={this.draw}>Generar</button>
                <h2>Promo</h2>
                <canvas id="canvasPromo" width={this.canvasSize} height={this.canvasSize} onClick={this.download}></canvas>
            </div>
        )
    }

}

export default Promo;