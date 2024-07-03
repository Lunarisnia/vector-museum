import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import {drawCircle, Position} from "./internal/shapes/circle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <canvas id="CircleCanvas" width="480" height="480" style="outline: solid black"></canvas>
    </div>
`

const canvas = document.querySelector<HTMLCanvasElement>("#CircleCanvas");
const ctx = canvas.getContext('2d');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let mousePosition = null;

async function animate() {
    const canvas = document.querySelector<HTMLCanvasElement>("#CircleCanvas");
    canvas.addEventListener("mousemove", (mouseEvent) => {
        mousePosition = new Position(mouseEvent.x, mouseEvent.y);
    })
    while (true) {
        if (mousePosition) {
            drawCircle(canvas, mousePosition, 30, "black");
            const cx = mousePosition.x;
            const yx = mousePosition.y;
            for (let d = 0; d < 360 + 1; d++) {
                const x = cx + (30 * Math.cos(d * Math.PI / 180))
                const y = yx + (30 * Math.sin(d * Math.PI / 180))
                drawCircle(canvas, new Position(x, y), 1, 'red');
            }
        }

        await sleep(1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

animate().then(r => r);