"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2, baz: 3 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(15);
const items = {
    list: ['a', 'b', 'c'],
    value: 10,
};
class Queue {
    constructor() {
        this.list = [];
    }
    get legnth() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (0 < queue.legnth) {
    console.log(queue.dequeue());
}
