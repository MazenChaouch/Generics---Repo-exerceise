"use strict";
class Repository {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getById(id) {
        const item = this.data.find((item) => item.id === id);
        return item;
    }
    getAll() {
        return this.data;
    }
    update(id, newItem) {
        const item = this.getById(id);
        if (item)
            Object.assign(item, newItem);
        //const itemIndex = this.data.findIndex((item)=>item.id === id)
        // if (itemIndex) this.data[itemIndex] = newItem
        //if (itemIndex) this.data.splice(itemIndex,1,newItem)
    }
    remove(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const books = new Repository();
books.add({ title: "Vuejs", id: 11 });
books.add({ title: "Reactjs", id: 12 });
books.add({ title: "Nextjs", id: 13 });
console.log(books.getAll());
books.update(11, { title: "Nestjs", id: 11 });
console.log(books.getAll());
