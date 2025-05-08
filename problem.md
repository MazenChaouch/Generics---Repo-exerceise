# 🧠 Exercise: Generic Repository Utility

## 📝 Scenario

You're building a generic in-memory repository to manage collections of items of **any type**, but every item must at least have an `id`. Think of it like a small database table for each type of data (e.g., users, products), stored in memory as an array.

---

## 🎯 Objective

Implement a reusable, type-safe repository class using TypeScript generics to handle operations like adding, retrieving, listing, and removing data.

---

## ✅ Requirements

### 1. Define a Generic Class

- Create a class `Repository<T>` with a type constraint: `T` must extend `{ id: number }`
- This ensures every item managed by the repository has a unique numeric ID.

### 2. Internal Data Structure

- Use a **private array** of type `T[]` to store the data items.
- This will act as the in-memory "table" of data.

### 3. Repository Methods

Each repository instance should support:

- `add(item: T): void`

  - Adds a new item to the repository

- `getById(id: number): T | undefined`

  - Finds and returns an item by its `id`, or returns `undefined` if not found

- `getAll(): T[]`

  - Returns a list of all stored items

- `remove(id: number): void`

  - Deletes the item with the matching `id` from the list

---

## 🧪 Tasks

1. Define two data types:

   - `User` (e.g., `{ id: number, name: string }`)
   - `Product` (e.g., `{ id: number, title: string, price: number }`)

2. Create repository instances:

   - `const userRepo = new Repository<User>()`
   - `const productRepo = new Repository<Product>()`

3. Use the repository methods to:

   - Add multiple users and products
   - Fetch a user or product by ID
   - List all users or all products
   - Remove a specific user or product by ID

---

## 🧩 Bonus Challenge (Optional)

Add an `update(id: number, newItem: Partial<T>): void` method to the class that:

- Locates the existing item by `id`
- Merges the `newItem` into it using `Object.assign`
- Skips update if the item doesn't exist
