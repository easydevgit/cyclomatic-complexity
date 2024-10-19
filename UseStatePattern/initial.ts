class Shape {
  constructor(private type: string) {}

  draw(): void {
    if (this.type === "circle") {
      console.log("Drawing Circle");
    } else if (this.type === "triangle") {
      console.log("Drawing Triangle");
    } else {
      console.log("Unknown shape");
    }
  }

  change(): void {
    if (this.type === "circle") {
      console.log("Changing Circle");
    } else if (this.type === "triangle") {
      console.log("Changing Triangle");
    } else {
      console.log("Unknown shape");
    }
  }
}

function stateClient() {
  const circle = new Shape("circle");
  circle.draw();
  circle.change();

  const triangle = new Shape("triangle");
  triangle.draw();
  triangle.change();
}

stateClient();
