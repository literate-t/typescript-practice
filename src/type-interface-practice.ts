interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shaped: Shape[] = [circle, rectangle];
// shaped.forEach((shape) => {
//   console.log(shape.getArea());
// });

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer extends Person {
//   skills: string[];
// }

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: 'kyef',
};

const expert: Developer = {
  name: 'kim veloper',
  skills: ['javascript'],
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';

type OnlyString = string;
