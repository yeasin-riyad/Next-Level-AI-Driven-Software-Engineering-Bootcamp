# Node.js Event Loop Explained

## 📌 Introduction

Event Loop হলো Node.js এর সবচেয়ে গুরুত্বপূর্ণ concept গুলোর একটি।  
অনেক interview তে এটি খুব common question।

কারণ:

> Node.js এর asynchronous এবং non-blocking architecture এর মূল ভিত্তি হলো Event Loop।

---


# 🧠 Event Loop কী?

> Event Loop হলো এমন একটি mechanism যা asynchronous task complete হওয়ার পর callback execute করে।

সহজ ভাষায়:

```text
Task complete হয়েছে কিনা check করা
↓
Complete হলে callback execute করা
```

এটাই Event Loop এর কাজ।

---

# ❓ কেন Event Loop দরকার?

JavaScript মূলত:

```text
Single Threaded
```

মানে:

একই সময়ে একটিমাত্র কাজ execute করতে পারে।

---

# 🔥 Problem কোথায়?

ধরো:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer Done");
}, 2000);

console.log("End");
```

যদি JavaScript পুরোপুরি synchronous হতো তাহলে output হতো:

```text
Start
(wait 2 sec)
Timer Done
End
```

কিন্তু actual output:

```text
Start
End
(after 2 sec)
Timer Done
```

কারণ Event Loop asynchronous কাজ handle করে।

---

# 🚀 Node.js Internally কী করে?

Node.js asynchronous কাজগুলো background এ পাঠিয়ে দেয়।

যেমন:

- File Read
- Database Query
- API Call
- Timer
- Network Request

Meanwhile main thread অন্য কাজ continue করে।

---

# 📦 Event Loop Architecture

Event Loop বুঝতে আগে কিছু component বুঝতে হবে।

---

# 🧩 Main Components

---

# 1️⃣ Call Stack

যেখানে synchronous code execute হয়।

Example:

```js
console.log("Hello");
```

এটা Call Stack এ যায়।

---

# 2️⃣ Web APIs / Node APIs

Async কাজগুলো এখানে handle হয়।

যেমন:

- setTimeout
- fs.readFile
- fetch
- database call

---

# 3️⃣ Callback Queue

যখন async task complete হয়:

তার callback এখানে আসে।

---

# 4️⃣ Event Loop

Event Loop continuously check করে:

```text
Call Stack empty কিনা
```

যদি empty হয়:

তাহলে queue থেকে callback এনে execute করে।

---

# 🔄 Full Flow Diagram

```text
Call Stack
     ↑
     |
Event Loop
     |
Callback Queue
     ↑
Async APIs
```

---

# ⚙️ Step-by-Step Example

---

# Example 1

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

---

# 🔍 Execution Step-by-Step

---

## ✅ Step 1

```js
console.log("Start");
```

Call Stack এ যায়।

Output:

```text
Start
```

---

## ✅ Step 2

```js
setTimeout(...)
```

Timer Node API/Web API তে চলে যায়।

Call Stack free হয়ে যায়।

---

## ✅ Step 3

```js
console.log("End");
```

Output:

```text
End
```

---

## ✅ Step 4

Timer complete হলে callback যায়:

```text
Callback Queue
```

তে।

---

## ✅ Step 5

Event Loop check করে:

```text
Call Stack empty?
```

Yes।

তাই callback execute হয়।

Output:

```text
Timer
```

---

# 📌 Final Output

```text
Start
End
Timer
```

---

# 🧠 Important Point

অনেকে ভাবে:

```js
setTimeout(fn, 0)
```

মানে সাথে সাথে execute হবে।

❌ Wrong

এটা minimum delay দেয়।

Callback queue তে যাবে।

তারপর Event Loop execute করবে।

---

# 🍔 Real-Life Analogy

ধরো তুমি Restaurant এ গেলে।

---

# 🔹 Main Chef = Call Stack

Chef একসময় একটিই dish বানাতে পারে।

---

# 🔹 Assistant = Async API

Assistant বাইরে গিয়ে ingredients নিয়ে আসে।

---

# 🔹 Order Ready Table = Callback Queue

সব ready order এখানে wait করে।

---

# 🔹 Manager = Event Loop

Manager check করে:

```text
Chef free?
```

free হলে:

```text
Next order পাঠাও
```

---

# 📦 Another Example

---

# Example 2

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

setTimeout(() => {
  console.log("4");
}, 0);

console.log("5");
```

---

# 🤔 Output কী হবে?

---

# Step-by-Step

## 🔹 Sync code first

```text
1
3
5
```

---

## 🔹 Then async callbacks

0ms timer আগে complete হবে:

```text
4
```

---

## 🔹 Then 1000ms timer

```text
2
```

---

# ✅ Final Output

```text
1
3
5
4
2
```

---

# ❌ Blocking Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

for (let i = 0; i < 10000000000; i++) {}

console.log("End");
```

---

# 🤔 কী হবে?

Loop event loop block করবে।

তাই output:

```text
Start
End
Timer
```

---

# 🧠 কারণ?

Event Loop callback execute করতে পারে না যতক্ষণ:

```text
Call Stack busy
```

---

# ⚡ Microtask Queue vs Callback Queue

এটি advanced কিন্তু খুব important concept।

---

# 🔹 Callback Queue

যেমন:

- setTimeout
- setInterval

---

# 🔹 Microtask Queue

যেমন:

- Promise.then
- queueMicrotask

---

# 📌 Priority কার বেশি?

```text
Microtask Queue > Callback Queue
```

---

# Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

---

# ✅ Output

```text
Start
End
Promise
Timeout
```

---

# ❓ কেন?

কারণ:

```text
Microtask Queue আগে execute হয়
```

---

# 🔄 Node.js Event Loop Phases

Node.js এ Event Loop phase আকারে কাজ করে।

---

# 📌 Main Phases

```text
1. Timers
2. Pending Callbacks
3. Idle/Prepare
4. Poll
5. Check
6. Close Callbacks
```

---

# 🔥 Most Important Phase

## Poll Phase

এখানে:

- I/O callbacks execute হয়
- New events wait করে

---

# 🧠 Event Loop Continuous কেন?

কারণ Node.js continuously check করে:

```text
New callback এসেছে?
```

যতক্ষণ application alive থাকে Event Loop চলতেই থাকে।

---

# 🚀 Why Event Loop Makes Node.js Fast?

কারণ:

✅ Non-blocking  
✅ Async handling  
✅ Single thread efficient use  
✅ Thousands of concurrent requests handle করতে পারে

---

# 🌍 Real Backend Example

ধরো:

১০,০০০ user API hit করলো।

Traditional server:

```text
1 request wait
then next request
```

Node.js:

```text
সব request async handle
callback queue manage
event loop execute
```

তাই scalable।

---

# 🎯 Interview Questions

---

# ❓ Q1: Event Loop কী?

> Event Loop হলো এমন mechanism যা callback queue থেকে callback এনে execute করে যখন call stack empty থাকে।

---

# ❓ Q2: Node.js Fast কেন?

কারণ:

- Event Loop
- Non-blocking I/O
- Async architecture

---

# ❓ Q3: setTimeout(0) কি সাথে সাথে execute হয়?

❌ না।

এটা callback queue তে যায়।

Event Loop পরে execute করে।

---

# ❓ Q4: Promise আগে execute হয় কেন?

কারণ:

```text
Microtask Queue এর priority বেশি
```

---

# 🧠 Quick Revision Summary

---

# 🔹 Event Loop

✅ Call Stack monitor করে  
✅ Queue manage করে  
✅ Async callback execute করে

---

# 🔹 Important Components

```text
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
```

---

# 🔹 Priority

```text
Microtask Queue
↓
Callback Queue
```

---

# 🚀 Super Short Interview Answer

> Event Loop হলো Node.js এর mechanism যা asynchronous operations complete হওয়ার পর callback queue থেকে callback এনে execute করে যখন call stack empty থাকে।  
> এটি Node.js কে non-blocking এবং scalable করে তোলে।

---

# 📌 Final Summary

Event Loop হলো Node.js এর heart।

এটি:

- asynchronous operation manage করে
- callback queue monitor করে
- call stack empty হলে callback execute করে

এই architecture এর কারণে Node.js:

✅ Fast  
✅ Scalable  
✅ Non-Blocking  
✅ Real-Time Applications এর জন্য Excellent

এবং Event Loop ছাড়া Node.js এর async behaviour সম্ভব হতো না।