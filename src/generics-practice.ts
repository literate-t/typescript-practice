function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2, baz: 3 });

function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(15);

// interface Items<T> {
//   list: T[];
// }

// any를 사용하면 타입을 지킬 수 없음
type Items<T, V> = {
  list: T[];
  value: V;
};

const items: Items<String, number> = {
  list: ['a', 'b', 'c'],
  value: 10,
};

class Queue<T> {
  list: T[] = [];

  get legnth() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (0 < queue.legnth) {
  console.log(queue.dequeue());
}
