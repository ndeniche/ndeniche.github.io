import React from 'react';

class Promo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            changeTrigger: props.changeTrigger,
            events: props.events
        }

        this.canvasSize = 400;
        this.totalHeight = this.canvasSize * .75;
        this.y = this.canvasSize * .25;
        this.x = this.canvasSize * .12;
        this.eHeight = this.canvasSize * .1;

        this.draw = this.draw.bind(this);
        this.getProperties = this.getProperties.bind(this);
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

        var img = new Image();
        var cs = this.canvasSize;
        img.onload = function() {
            var propx = 520/800,
                propy = 100/800,
                sizex = propx * cs,
                sizey = propy * cs;
            ctx.drawImage(img, (cs - sizex)/2, (cs/100), sizex, sizey);
            ctx.fill();
        };
        img.src = process.env.PUBLIC_URL + '/logo.png';

        Object.keys(this.state.events).forEach((c,i) => {
            let e = this.state.events[c];
            ctx.font = (this.canvasSize * 0.05) + 'px serif';
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText(e.title, this.x, (this.y + (i * this.eHeight) + (i * padding)));
        });

        ctx.fill();
    }

    render() {
        return(
            <div>
                <h2>Promo</h2>
                <canvas id="canvasPromo" width={this.canvasSize} height={this.canvasSize}></canvas>
                <button onClick={this.draw}>Draw</button>
            </div>
        )
    }

}

export default Promo;