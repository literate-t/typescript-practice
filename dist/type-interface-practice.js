"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shaped = [circle, rectangle];
const person = {
    name: 'kyef',
};
const expert = {
    name: 'kim veloper',
    skills: ['javascript'],
};
const people = [person, expert];
const color = 'orange';
