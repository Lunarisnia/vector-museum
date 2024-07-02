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

let mousePosition = new Position(-1, -1);

async function animate() {
    const canvas = document.querySelector<HTMLCanvasElement>("#CircleCanvas");
    canvas.addEventListener("mousemove", (mouseEvent) => {
        mousePosition = new Position(mouseEvent.x, mouseEvent.y);

    })
    while (true) {
        drawCircle(canvas, mousePosition);
        await sleep(1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

animate().then(r => r);