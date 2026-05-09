# Node.js এ Event-Driven Architecture

## 📌 পরিচিতি

Event-Driven Architecture (EDA) হলো Node.js এর সবচেয়ে গুরুত্বপূর্ণ concept গুলোর একটি।  
Node.js মূলত asynchronous এবং non-blocking architecture ব্যবহার করে যেখানে সবকিছু event এর মাধ্যমে পরিচালিত হয়।

সহজ ভাষায়:

> যখন কোনো event ঘটে, তখন নির্দিষ্ট একটি function (listener/callback) execute হয়।

এই architecture এর কারণে Node.js একই সময়ে হাজার হাজার request efficiently handle করতে পারে।

---

# 🚀 কেন Node.js Event-Driven Architecture ব্যবহার করে?

Node.js তৈরি করা হয়েছে:

- High Performance এর জন্য
- Scalability এর জন্য
- Non-Blocking Operations এর জন্য
- Real-Time Application এর জন্য

একটি কাজ শেষ হওয়ার জন্য অপেক্ষা না করে Node.js asynchronous ভাবে একাধিক কাজ handle করতে পারে।

---

# 🧠 Core Concepts

## 1. Event

Event হলো কোনো action বা ঘটনা যা system detect করে।

উদাহরণ:

- User login
- HTTP request
- File read complete
- Database connected
- Timer finished

---

## 2. Event Emitter

যে object event trigger (emit) করে তাকে Event Emitter বলে।

Node.js এ built-in `EventEmitter` class রয়েছে।

```js
const EventEmitter = require("events");
```

---

## 3. Event Listener

Listener কোনো নির্দিষ্ট event এর জন্য অপেক্ষা করে এবং event ঘটলে callback function execute করে।

```js
emitter.on("eventName", callbackFunction);
```

---

# ⚙️ Basic Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log("User logged in");
});

emitter.emit("login");
```

---

# 🔍 Step-by-Step Explanation

## Step 1: EventEmitter Instance তৈরি

```js
const emitter = new EventEmitter();
```

এটি একটি event manager object তৈরি করে।

---

## Step 2: Listener Register করা

```js
emitter.on("login", () => {
  console.log("User logged in");
});
```

এখানে:

- `"login"` event listen করা হচ্ছে
- event ঘটলে callback execute হবে

---

## Step 3: Event Emit করা

```js
emitter.emit("login");
```

এখানে `"login"` event trigger করা হয়েছে।

### Output

```bash
User logged in
```

---

# 📊 Event Flow

```text
Event ঘটে
    ↓
Emitter Event Emit করে
    ↓
Listener Event Detect করে
    ↓
Callback Execute হয়
```

---

# 🌐 HTTP Server Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
```

## এখানে Internally কী হয়?

1. Client request পাঠায়
2. Node.js request event detect করে
3. Callback function execute হয়
4. Response পাঠানো হয়

---

# 🔄 Event Loop এর সাথে সম্পর্ক

Event-Driven Architecture কাজ করে:

- Event Loop
- Callback Queue
- Non-Blocking I/O

এর মাধ্যমে।

উদাহরণ:

```js
const fs = require("fs");

fs.readFile("data.txt", (err, data) => {
  console.log(data.toString());
});
```

Node.js পুরো server থামিয়ে রাখে না।

বরং:

1. File reading background এ চলে যায়
2. Meanwhile অন্য কাজ continue হয়
3. File read complete হলে event fire হয়
4. Callback execute হয়

---

# ⚡ Traditional vs Event-Driven Model

## Traditional Blocking Model

```text
Task 1 শেষ হবে
      ↓
Task 2 শুরু হবে
```

---

## Event-Driven Non-Blocking Model

```text
Task শুরু
    ↓
Background এ চলতে থাকে
    ↓
Meanwhile অন্য কাজ চলতে থাকে
    ↓
Complete হলে event trigger হয়
```

---

# 🛒 Real-World Example (E-Commerce)

যখন user order place করে:

```text
orderPlaced Event
       ↓
Send Email
Update Inventory
Generate Invoice
Send Notification
```

প্রতিটি কাজ আলাদা listener দিয়ে handle করা যায়।

---

# 🧩 Advanced Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("orderPlaced", (order) => {
  console.log(`Email sent for order ${order.id}`);
});

emitter.on("orderPlaced", (order) => {
  console.log(`Invoice generated for order ${order.id}`);
});

emitter.emit("orderPlaced", {
  id: 101,
});
```

## Output

```bash
Email sent for order 101
Invoice generated for order 101
```

একটি event একাধিক listener trigger করতে পারে।

---

# ✅ Advantages

## 1. High Performance

একই সময়ে অনেক request efficiently handle করতে পারে।

---

## 2. Non-Blocking

একটি operation পুরো application block করে না।

---

## 3. Scalable

Real-time এবং scalable system এর জন্য excellent।

যেমন:

- Chat Application
- Streaming App
- Gaming Server
- Notification System

---

## 4. Loose Coupling

একই event এ বিভিন্ন module independently react করতে পারে।

---

# ❌ Disadvantages

## 1. Debugging কঠিন

Complex event chain debug করা কঠিন হতে পারে।

---

## 2. Callback Complexity

অনেক nested callback code messy করে ফেলতে পারে।

---

## 3. Error Handling কঠিন

Proper error listener ব্যবহার করা প্রয়োজন।

---

# 📦 Node.js এর Built-in Event Based Modules

| Module | Common Events |
|---|---|
| HTTP | request |
| FS | open, close |
| Stream | data, end |
| Process | exit |
| Socket | connect |

---

# 🔥 Real-Life Analogy

```text
Customer order দিল
      ↓
Bell বাজলো (Event)
      ↓
Chef শুনলো (Listener)
      ↓
Food তৈরি হলো (Callback Action)
```

---

# 🎯 Interview Definition

> Event-Driven Architecture হলো এমন একটি software architecture যেখানে application এর flow events এর উপর নির্ভর করে এবং listener asynchronous ভাবে সেই events handle করে।

---

# 🧠 Interview Summary (Quick Revision)

## গুরুত্বপূর্ণ Keywords

- Event
- EventEmitter
- Listener
- Callback
- Event Loop
- Non-Blocking I/O
- Asynchronous
- Single Threaded

---

# 🚀 Super Short Explanation

Node.js এ:

1. Event ঘটে
2. EventEmitter event emit করে
3. Listener event detect করে
4. Callback asynchronously execute হয়

এজন্য Node.js হয়:

- Fast
- Scalable
- Non-Blocking

---

# 📌 Final Summary

Event-Driven Architecture হলো Node.js এর core architecture pattern যেখানে application events এর মাধ্যমে কাজ করে।

এখানে:

- EventEmitter event trigger করে
- Listener event detect করে
- Callback function execute হয়

এই system এর কারণে Node.js:

✅ High Performance দেয়  
✅ Non-Blocking behaviour প্রদান করে  
✅ Real-Time Application এর জন্য excellent  
✅ হাজার হাজার concurrent request handle করতে পারে

এবং এই পুরো architecture Event Loop এর উপর ভিত্তি করে কাজ করে।