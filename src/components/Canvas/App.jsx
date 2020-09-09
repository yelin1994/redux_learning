import  React from 'react';
import './index.scss';
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = null;
    }
    componentDidMount() {
        this.handleDraw();
    }

    handleDraw = () => {
        const canvas = this.canvasRef;
        const ctx = canvas.getContext('2d');
        const {width, height} = canvas;
        ctx.fillStyle = 'red';
        function draw(rotation = 0) {
            ctx.clearRect(0, 0, 1000, 1000);
            ctx.save();
            ctx.translate(width / 2, height/ 2);
            ctx.rotate(rotation);
            ctx.translate(-width/2, -height/2);
            ctx.beginPath();
            ctx.rect(200, 200, 200, 200);
            ctx.fill();
            ctx.restore();
        }
        function update(t) {
            draw(t /500);
            requestAnimationFrame(update);
        }
        update(0);
    }

    con

    render() {
        return (
            <canvas className='container' ref={el => this.canvasRef = el}> 

            </canvas>
        )
    }
}