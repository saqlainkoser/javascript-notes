
# JavaScript: Value Copy, Reference Copy, Shallow Copy & Deep Copy

> 📌 We can use nested arrays and nested objects together — the copy behavior below applies to both.

---

## 1. Value Copy

### Definition

A **Value Copy** means the actual value is copied into a new variable. Both variables become completely independent.

### Applicable to Primitive Data Types

- Number
- String
- Boolean
- Null
- Undefined
- BigInt
- Symbol

### Example

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

### Memory Representation

**Before**

```
a ---> 10
b ---> 10
```

**After `b = 20`**

```
a ---> 10
b ---> 20
```

### Key Points

- Actual value is copied.
- Each variable has its own memory.
- Changing one variable does not affect the other.

---

## 2. Reference Copy

### Definition

Objects, Arrays, and Functions are stored **by reference**. When one object is assigned to another variable, only the memory address (reference) is copied.

### Example

```js
let person1 = {
  name: "Ali",
  age: 25
};

let person2 = person1;

person2.age = 30;

console.log(person1.age); // 30
console.log(person2.age); // 30
```

### Memory Representation

**Before**

```
person1 ----\
              ---> { name: "Ali", age: 25 }
person2 ----/
```

**After `person2.age = 30`** — both point to:

```
{
  name: "Ali",
  age: 30
}
```

### Key Points

- Only the reference is copied.
- Both variables point to the same object.
- Any modification affects both variables.

---

## 3. Shallow Copy

### Definition

A **Shallow Copy** creates a new top-level object, but nested objects or arrays are still shared.

### Example

```js
const student1 = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const student2 = { ...student1 };

student2.name = "David";
student2.address.city = "Mumbai";

console.log(student1);
console.log(student2);
```

### Output

**student1**

```js
{
  name: "John",
  address: {
    city: "Mumbai"
  }
}
```

**student2**

```js
{
  name: "David",
  address: {
    city: "Mumbai"
  }
}
```

**Notice:**

- `name` is copied separately.
- `address` is still shared.

### Memory Representation

```
student1
{ name: "John", address --------\
                                  ---> { city: "Delhi" }
student2                        /
{ name: "David", address ------/
```

After changing `student2.address.city = "Mumbai"` — **both objects** see `city = "Mumbai"`.

### Ways to Create a Shallow Copy

**Using Spread Operator**

```js
const copy = { ...obj };
```

**Using `Object.assign()`**

```js
const copy = Object.assign({}, obj);
```

**Array Spread**

```js
const copy = [...array];
```

**Array `slice()`**

```js
const copy = array.slice();
```

### Key Points

- New top-level object.
- Nested objects remain shared.
- Changing nested properties affects both objects.

---

## 4. Deep Copy

### Definition

A **Deep Copy** creates a completely new object, including all nested objects and arrays. Nothing is shared between the original and copied object.

### Example

```js
const student1 = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const student2 = structuredClone(student1);

student2.address.city = "Mumbai";

console.log(student1.address.city); // Delhi
console.log(student2.address.city); // Mumbai
```

### Memory Representation

**student1**

```
{ name: "John", address ---> { city: "Delhi" } }
```

**student2**

```
{ name: "John", address ---> { city: "Delhi" } }
```

Separate objects in memory.

### Deep Copy using JSON

```js
const copy = JSON.parse(JSON.stringify(original));
```

### ⚠️ Limitations of the JSON Method

It does **NOT** correctly copy:

- Functions
- Undefined
- Symbol
- Date objects (converted to strings)
- Map
- Set
- Circular references

### ✅ Modern & Recommended Method

```js
const copy = structuredClone(original);
```

**Advantages:**

- Copies nested objects
- Copies arrays
- Supports `Date`
- Supports `Map`
- Supports `Set`
- Supports Typed Arrays
- Supports Circular References

---

## 📊 Comparison Table

|Feature|Value Copy|Reference Copy|Shallow Copy|Deep Copy|
|---|---|---|---|---|
|Works With|Primitive Types|Objects & Arrays|Objects & Arrays|Objects & Arrays|
|Creates New Variable|✅|❌|✅|✅|
|Creates New Top-Level Object|N/A|❌|✅|✅|
|Copies Nested Objects|N/A|❌|❌|✅|
|Nested Objects Shared|❌|✅|✅|❌|
|Changes Affect Original|❌|✅|Only Nested Objects|❌|
|Memory Shared|❌|✅|Partially|❌|

---

## 🎤 Quick Interview Difference

**Value Copy**

- Copies the actual value.
- Used with primitive data types.
- Changes do not affect the original.

```js
let b = a;
```

**Reference Copy**

- Copies only the memory address.
- Used with objects and arrays.
- Both variables point to the same object.

```js
const b = a;
```

**Shallow Copy**

- Creates a new top-level object.
- Nested objects are shared.

```js
const copy = { ...obj };
const copy = Object.assign({}, obj);
```

**Deep Copy**

- Creates a completely independent copy.
- Copies every nested object and array.
- No shared references.

```js
const copy = structuredClone(obj);
```

---

## 🧠 Easy Trick to Remember

|Data Type / Method|Copy Type|
|---|---|
|Primitive Types|Value Copy|
|`=` with Objects/Arrays|Reference Copy|
|Spread (`...`)|Shallow Copy|
|`Object.assign()`|Shallow Copy|
|`structuredClone()`|Deep Copy|
|`JSON.parse(JSON.stringify())`|Deep Copy (with limitations)|

---

## ✅ One-Line Summary

- **Value Copy** → Copies the value.
- **Reference Copy** → Copies the memory address.
- **Shallow Copy** → New outer object, shared nested objects.
- **Deep Copy** → Completely independent copy of the entire object.

---

_Part of [[JavaScript By S.K. Ansari Sir]] notes. See also [[JS Objects]] and [[JS ARRAYS]] for related concepts._