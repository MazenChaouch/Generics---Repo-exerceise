class Repository<T extends { id: number }> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }

  getById(id: number): T | undefined {
    const item = this.data.find((item) => item.id === id);
    return item;
  }

  getAll(): T[] {
    return this.data;
  }

  update(id: number, newItem: Partial<T>): void {
    const item = this.getById(id);
    if (item) Object.assign(item, newItem);
    //const itemIndex = this.data.findIndex((item)=>item.id === id)
    // if (itemIndex) this.data[itemIndex] = newItem
    //if (itemIndex) this.data.splice(itemIndex,1,newItem)
  }

  remove(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}
interface Book {
  title: string;
  id: number;
}

const books = new Repository<Book>();
books.add({ title: "Vuejs", id: 11 });
books.add({ title: "Reactjs", id: 12 });
books.add({ title: "Nextjs", id: 13 });

console.log(books.getAll());

books.update(11, { title: "Nestjs", id: 11 });

console.log(books.getAll());
