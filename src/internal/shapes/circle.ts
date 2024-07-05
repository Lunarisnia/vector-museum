export class Position {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export function drawCircle(element: HTMLCanvasElement, position: Position, radius: number, color: string) {
    const ctx = element.getContext("2d")!;
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

export function draw3DTube(ctx: CanvasRenderingContext2D, element: HTMLCanvasElement, position: Position, radius: number) {
    drawCircle(element, position, 30, "red");
    const cx = position.x;
    const yx = position.y;
    for (let d = 0; d < 360 + 1; d++) {
        const x = cx + (radius * Math.cos(d * Math.PI / 180))
        const y = yx + (radius * Math.sin(d * Math.PI / 180))
        const scalar = 2;
        ctx.moveTo(x, y);
        ctx.lineTo((scalar * x) - (element.width / 2), (scalar * y) - (element.height / 2));
        ctx.stroke();
    }
}