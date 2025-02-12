### 🚀 JavaScript Promises: A Crash Course

A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It helps in handling asynchronous code more efficiently than callbacks.

---

## **1. Creating a Promise**

A Promise takes a function with two arguments: `resolve` (for success) and `reject` (for failure).

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 2000);
});
```

---

## **2. Handling a Promise**

Once a Promise is created, you handle it using `.then()`, `.catch()`, and `.finally()`.

```javascript
myPromise
  .then((result) => {
    console.log(result); // Runs if promise is resolved
  })
  .catch((error) => {
    console.error(error); // Runs if promise is rejected
  })
  .finally(() => {
    console.log("🔄 Promise completed"); // Runs in all cases
  });
```

---

## **3. Chaining Promises**

Promises can be chained to avoid callback hell.

```javascript
const step1 = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Step 1 ✅"), 1000));
};

const step2 = (prevResult) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(prevResult + " → Step 2 ✅"), 1000)
  );
};

const step3 = (prevResult) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(prevResult + " → Step 3 ✅"), 1000)
  );
};

step1().then(step2).then(step3).then(console.log).catch(console.error);
```

---

## **4. `async/await` (Better Way to Handle Promises)**

Instead of using `.then()`, you can write asynchronous code more cleanly with `async/await`.

```javascript
const asyncFunction = async () => {
  try {
    let result1 = await step1();
    let result2 = await step2(result1);
    let result3 = await step3(result2);
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction();
```

---

## **5. `Promise.all()` (Run Promises in Parallel)**

Wait for multiple Promises to complete.

```javascript
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("✅ P1 done"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("✅ P2 done"), 2000)
);

Promise.all([promise1, promise2]).then(console.log);
```

---

## **6. `Promise.race()` (Return the First Resolved Promise)**

Returns the first Promise that settles (either resolves or rejects).

```javascript
Promise.race([promise1, promise2]).then(console.log);
```

---

## **7. `Promise.allSettled()` (Wait for All, Regardless of Success/Failure)**

It waits for all Promises to finish and returns an array of results.

```javascript
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject("❌ P3 failed"), 1500)
);

Promise.allSettled([promise1, promise2, promise3]).then(console.log);
```

---

## **Conclusion**

- Use **Promises** to handle async operations.
- Use `.then()` and `.catch()` for handling them.
- Prefer **async/await** for cleaner code.
- Use `Promise.all()`, `Promise.race()`, and `Promise.allSettled()` for advanced scenarios.

es5 and es6
ecma java

### Module

## package.json
