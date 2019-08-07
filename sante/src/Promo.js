import React from 'react';

class Promo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            changeTrigger: props.changeTrigger,
            events: props.events
        }

        this.totalHeight = 600;
        this.y = 200;
        this.x = 50;
        this.eHeight = 80;

        this.draw = this.draw.bind(this);
        this.getProperties = this.getProperties.bind(this);
    }

    getProperties() {
        return {
            padding: (this.totalHeight - (80 * Object.keys(this.state.events).length))/5,
        };
    }

    draw() {
        var ctx = document.getElementById('canvasPromo').getContext('2d');

        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0,0,800,800);

        var {padding} = this.getProperties();

        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 140, 10);
        };
        img.src = process.env.PUBLIC_URL + '/logo.png';

        Object.keys(this.state.events).forEach((c,i) => {
            let e = this.state.events[c];
            ctx.font = '42px serif';
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText(e.title, this.x, (this.y + (i * this.eHeight) + (i * padding)));
            console.log('title: ' + e.title + ', x: ' + this.x + ', y: ' + (this.y + (i * this.eHeight) + (i * padding)));
        });

        ctx.fill();

        console.log(this.state.events);
    }

    render() {
        return(
            <div>
                <h2>Promo</h2>
                <canvas id="canvasPromo" width="800" height="800"></canvas>
                <button onClick={this.draw}>Draw</button>
            </div>
        )
    }

}

export default Promo;