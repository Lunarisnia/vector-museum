import './style.css'
import {draw3DTube, Position} from "./internal/shapes/circle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <canvas id="CircleCanvas" width="480" height="480" style="outline: solid black"></canvas>
    </div>
`

const canvas = document.querySelector<HTMLCanvasElement>("#CircleCanvas")!;
const ctx = canvas.getContext('2d')!;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let mousePosition: Position | null = null;

async function animate() {
    const canvas = document.querySelector<HTMLCanvasElement>("#CircleCanvas")!;
    canvas.addEventListener("mousemove", (mouseEvent) => {
        mousePosition = new Position(mouseEvent.x, mouseEvent.y);
    })
    while (true) {
        if (mousePosition) {
            // ctx.fillText(`Coordinate: ${mousePosition.x - (canvas.width / 2)}, ${mousePosition.y - (canvas.height / 2)}`, canvas.width/8, canvas.height/9);
            const centered = new Position(mousePosition.x - (canvas.width / 2), mousePosition.y - (canvas.height / 2));
            ctx.fillText(`Coordinate: ${mousePosition.x}, ${mousePosition.y}`, canvas.width / 8, canvas.height / 9);
            ctx.fillText(`Centered Coordinate: ${centered.x}, ${centered.y}`, canvas.width / 8, canvas.height / 7.5);
            // canvas.width
            draw3DTube(ctx, canvas, mousePosition, 30)
        }

        await sleep(1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

animate().then(r => r);