export class Position {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export function drawCircle(element: HTMLCanvasElement, position: Position) {
    const ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(position.x, position.y, 30, 0, 2 * Math.PI)
    ctx.fill();
}