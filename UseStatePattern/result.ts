abstract class ShapeState {
  abstract drawShape(): void;
  abstract changeShape(): void;
}

class CircleState extends ShapeState {
  drawShape(): void {
    console.log("Drawing Circle");
  }
  changeShape(): void {
    console.log("Changing Circle");
  }
}

class TriangleState extends ShapeState {
  drawShape(): void {
    console.log("Drawing Triangle");
  }
  changeShape(): void {
    console.log("Changing Triangle");
  }
}

class Shape {
  constructor(private state: ShapeState) {}

  draw(): void {
    this.state.drawShape();
  }
  change(): void {
    this.state.changeShape();
  }
}

function stateClient() {
  const circle = new Shape(new CircleState());
  circle.draw();
  circle.change();

  const triangle = new Shape(new TriangleState());
  triangle.draw();
  triangle.change();
}

stateClient();
