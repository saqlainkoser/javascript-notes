

# 🔹 JavaScript Objects – Every Concept Explained

## 1. What is an Object?

An object is a collection of key–value pairs (properties).

```js
let student = {
  name: "Ali",
  age: 21,
  course: "B.Tech"
};
```

- `name`, `age`, `course` → keys (properties)
- `"Ali"`, `21`, `"B.Tech"` → values

---

## 2. Creating Objects

### 🔹 Object Literal (Most Common)

```js
let car = {
  brand: "BMW",
  model: "X5",
  year: 2023
};
```

### 🔹 Using `new Object()`

```js
let user = new Object();
user.name = "Ahmed";
user.age = 25;
```

### 🔹 Using Constructor Function

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Saqlain", 24);
```

---

## 3. Accessing Object Properties

### 🔹 Dot Notation

```js
console.log(student.name);
```

### 🔹 Bracket Notation

```js
console.log(student["age"]);
```

📌 Use bracket notation when the key is dynamic:

```js
let key = "course";
console.log(student[key]);
```

---

## 4. Adding, Updating & Deleting Properties

**Add**

```js
student.city = "Bhopal";
```

**Update**

```js
student.age = 22;
```

**Delete**

```js
delete student.course;
```

---

## 5. Object with Methods (Functions inside Object)

```js
let user = {
  name: "Saqlain",
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(user.greet());
```

📌 `this` → refers to the current object

---

## 6. `this` Keyword (Important)

```js
let obj = {
  value: 10,
  show() {
    console.log(this.value);
  }
};

obj.show(); // 10
```

❌ Arrow functions don't have their own `this`

```js
let obj = {
  value: 10,
  show: () => {
    console.log(this.value); // undefined
  }
};
```

---

## 7. Nested Objects

```js
let employee = {
  name: "Ali",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

console.log(employee.address.city);
```

---

## 8. Looping Through Objects

### 🔹 `for...in`

```js
for (let key in student) {
  console.log(key, student[key]);
}
```

### 🔹 `Object.keys()`

```js
Object.keys(student).forEach(key => {
  console.log(key);
});
```

### 🔹 `Object.values()`

```js
console.log(Object.values(student));
```

### 🔹 `Object.entries()`

```js
Object.entries(student).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## 9. Object Destructuring

```js
let user = {
  name: "Saqlain",
  age: 24
};
let { name, age } = user;
console.log(name, age);
```

### 🔹 Rename Variable

```js
let { name: userName } = user;
```

---

## 10. Spread Operator with Objects

```js
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };
```

---

## 11. Object Methods (Built-in)

|Method|Use|
|---|---|
|`Object.keys()`|Get keys|
|`Object.values()`|Get values|
|`Object.entries()`|Key-value pairs|
|`Object.assign()`|Merge objects|
|`Object.freeze()`|Prevent changes|
|`Object.seal()`|Allow update only|

### 🔹 Freeze

```js
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 5; // won't change
```

---

## 12. Check Property Exists

```js
console.log("name" in student);
console.log(student.hasOwnProperty("age"));
```

---

## 13. Computed Properties

```js
let key = "score";
let result = {
  [key]: 95
};
console.log(result.score);
```

---

## 14. Optional Chaining `?.`

```js
console.log(employee?.address?.city);
```

Prevents runtime errors 👍

---

## 15. Factory Functions

```js
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return "Hi " + name;
    }
  };
}

let u1 = createUser("Ali", 23);
```

---

## 16. Prototypes (Advanced Concept)

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

let p = new Person("Saqlain");
p.sayHello();
```

---

## 17. Object vs Array

|Object|Array|
|---|---|
|Key-value|Index-value|
|Unordered|Ordered|
|Use for entities|Use for lists|

---

## 18. Common Interview Traps ⚠️

### 🔹 Comparing Objects

```js
let a = {};
let b = {};

console.log(a === b); // false
```

### 🔹 Correct Way

```js
JSON.stringify(a) === JSON.stringify(b);
```

---

## 🔥 Real-World Example

```js
let product = {
  id: 101,
  name: "Laptop",
  price: 55000,
  discount() {
    return this.price * 0.9;
  }
};

console.log(product.discount());
```

---

## ✅ Summary (One-Line)

> Objects store structured data using keys, are reference-based, support methods, and are the backbone of JavaScript.

---

_Part of [[JavaScript By S.K. Ansari Sir]] notes._