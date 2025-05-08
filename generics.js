"use strict";
function identity(value) {
    return value;
}
console.log(identity(false));
function merger(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { name: "user", age: 24 };
console.log("obj1 :", obj1);
const obj2 = { role: "admin" };
console.log("obj2 :", obj2);
const obj3 = Object.assign(Object.assign({}, obj1), obj2);
console.log("obj3 :", obj3);
const obj4 = merger({ name: "mazen", age: 24 }, obj2);
console.log("obj4 :", obj4);
const user1 = { id: 12, name: "Mazen", role: "admin" };
const user2 = { id: "12", name: "Mazen", role: "admin" };
const boolean = {
    key: "string",
    value: false,
};
const arr = {
    key: "posts",
    value: ["12"],
};
class Box {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
    setContent(value) {
        this.content = value;
    }
}
const text = new Box("hello");
text.getContent();
text.setContent("hi");
const counter = new Box(0);
counter.getContent();
const printLength = (item) => {
    console.log(item.length);
};
printLength("efwef");
