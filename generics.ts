function identity<T>(value: T): T {
  return value;
}

console.log(identity<boolean>(false));

function merger<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1: { name: string; age: number } = { name: "user", age: 24 };
console.log("obj1 :", obj1);

const obj2: { role: string } = { role: "admin" };
console.log("obj2 :", obj2);

const obj3 = { ...obj1, ...obj2 };
console.log("obj3 :", obj3);

const obj4 = merger<{ name: string; age: number }, { role: string }>(
  { name: "mazen", age: 24 },
  obj2,
);

console.log("obj4 :", obj4);

interface User<T> {
  id: T;
  name: string;
  role: "admin" | "guest";
}

const user1: User<number> = { id: 12, name: "Mazen", role: "admin" };
const user2: User<string> = { id: "12", name: "Mazen", role: "admin" };

interface Pair<T, U> {
  key: T;
  value: U;
}

const boolean: Pair<string, boolean> = {
  key: "string",
  value: false,
};
const arr: Pair<string, string[]> = {
  key: "posts",
  value: ["12"],
};

class Box<T> {
  private content: T;
  constructor(value: T) {
    this.content = value;
  }
  getContent(): T {
    return this.content;
  }
  setContent(value: T): void {
    this.content = value;
  }
}

const text = new Box<string>("hello");

text.getContent();
text.setContent("hi");

const counter = new Box<number>(0);

counter.getContent();

const printLength = <T extends { length: number }>(item: T): void => {
  console.log(item.length);
};

printLength("efwef");
