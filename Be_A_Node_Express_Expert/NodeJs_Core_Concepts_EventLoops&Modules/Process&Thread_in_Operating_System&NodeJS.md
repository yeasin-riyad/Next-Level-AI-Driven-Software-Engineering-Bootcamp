# Process এবং Thread in Operating System & Node.js

## 📌 পরিচিতি

কম্পিউটার সিস্টেমে Process এবং Thread খুব গুরুত্বপূর্ণ concept।  
বিশেষ করে:

- Operating System
- Node.js
- Backend Development
- Performance Optimization
- Multitasking

এসব বুঝতে Process ও Thread ভালোভাবে জানা জরুরি।

---

# 🎥 Video Tutorial

Click the thumbnail below to watch the full explanation on YouTube.

[![Process and Thread in Bangla](https://img.youtube.com/vi/os7KcmJvtN4/maxresdefault.jpg)]([https://www.youtube.com/watch?v=os7KcmJvtN4](https://youtu.be/os7KcmJvtN4?si=wbw9WBpS197TN1dX))

---

# 🧠 সহজ Definition

## 🔹 Process কী?

> Process হলো চলমান (running) program এর একটি instance।

যখন তুমি কোনো program open করো:

- Chrome
- VS Code
- Spotify
- Node.js App

তখন Operating System সেই program এর জন্য আলাদা process তৈরি করে।

---

## 🔹 Thread কী?

> Thread হলো process এর ভিতরের execution unit।

একটি process এর ভিতরে এক বা একাধিক thread থাকতে পারে।

Thread মূলত code execute করে।

---

# 🍔 Real-Life Example

ধরো একটি Restaurant।

---

## 🔹 Process = Restaurant

পুরো Restaurant হলো একটি Process।

এখানে আছে:

- Kitchen
- Manager
- Cash Counter
- Workers
- Resources

---

## 🔹 Thread = Workers

Workers হলো Thread।

তারা বিভিন্ন কাজ করে:

- Order নেওয়া
- রান্না করা
- Bill তৈরি
- Delivery দেওয়া

```text
Restaurant = Process
Workers = Threads
```

---

# 🏗️ Process Internally কী ধারণ করে?

একটি process এর নিজের:

- Memory Space
- Variables
- Heap Memory
- Stack Memory
- File Descriptors
- System Resources

থাকে।

প্রত্যেক Process সম্পূর্ণ isolated।

---

# 🔥 Example

ধরো:

```text
Chrome চলছে
VS Code চলছে
Spotify চলছে
```

এগুলো তিনটি আলাদা Process।

একটার crash অন্যটাকে crash করাবে না।

---

# ⚡ Thread Internally কী?

Thread হলো process এর ভিতরের worker।

একই process এর thread গুলো:

✅ একই memory share করে  
✅ একই resources share করে

তাই Thread communication অনেক fast হয়।

---

# 🌐 Example

Chrome browser এর ভিতরে:

- UI Thread
- Rendering Thread
- Network Thread
- JavaScript Thread

থাকে।

---

# 📊 Process vs Thread

| Feature | Process | Thread |
|---|---|---|
| Definition | Running program | Execution unit |
| Memory | আলাদা memory | Shared memory |
| Speed | তুলনামূলক slow | Fast |
| Communication | Hard | Easy |
| Isolation | High | Low |
| Resource Usage | বেশি | কম |
| Crash Impact | আলাদা | পুরো process affect হতে পারে |

---

# 🔄 Process Lifecycle

একটি process সাধারণত কয়েকটি stage পার করে।

```text
New
 ↓
Ready
 ↓
Running
 ↓
Waiting
 ↓
Terminated
```

---

# 🔄 Thread Lifecycle

```text
New
 ↓
Runnable
 ↓
Running
 ↓
Blocked
 ↓
Dead
```

---

# 🎯 Single Thread vs Multi Thread

---

# 🔹 Single Thread

একসময় একটিই task execute হয়।

Example:

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

Execution:

```text
Task 1
↓
Task 2
↓
Task 3
```

---

# 🔹 Multi Thread

একাধিক thread parallel কাজ করতে পারে।

Example:

```text
Thread 1 → File Download
Thread 2 → Music Play
Thread 3 → UI Rendering
```

---

# 🧠 Node.js Single Threaded কেন বলা হয়?

Node.js কে বলা হয়:

> “Single Threaded Event Loop Architecture”

মানে:

- Main JavaScript execution thread একটি
- কিন্তু internally background threads ব্যবহার হয়

---

# ⚙️ Node.js এ Internally কী হয়?

যখন তুমি:

```js
const fs = require("fs");

fs.readFile("demo.txt", () => {
  console.log("File Read Complete");
});
```

করো,

তখন:

---

## Step-by-Step

### 🔹 Main Thread

```text
readFile task receive করে
```

↓

### 🔹 libuv Thread Pool

```text
background thread এ file reading চলে যায়
```

↓

### 🔹 Main Thread meanwhile

```text
অন্য request handle করে
```

↓

### 🔹 File Reading Complete

```text
callback queue তে callback যায়
```

↓

### 🔹 Event Loop

```text
callback execute করে
```

---

# 📌 Important Point

Node.js JavaScript execution এর জন্য single thread ব্যবহার করে।

কিন্তু:

- File System
- Database
- Network
- Crypto

এর জন্য background threads ব্যবহার করে।

---

# 🔥 CPU Bound vs I/O Bound

---

# 🔹 I/O Bound Task

যেসব task waiting based।

যেমন:

- File Reading
- Database Query
- API Call

Node.js এগুলোতে excellent।

---

# 🔹 CPU Bound Task

যেসব task heavy calculation based।

যেমন:

- Image Processing
- Video Rendering
- AI Training
- Huge Loops

এগুলো single thread block করতে পারে।

---

# ❌ Blocking Example

```js
for (let i = 0; i < 10000000000; i++) {}
```

এটা পুরো event loop block করবে।

---

# 🧠 Multi Processing কী?

একাধিক process ব্যবহার করা।

Example:

```text
CPU Core 1 → Process 1
CPU Core 2 → Process 2
CPU Core 3 → Process 3
```

Node.js এ:

```js
cluster module
```

বা

```js
worker_threads
```

ব্যবহার করা হয়।

---

# 🔥 Worker Threads in Node.js

Heavy CPU task এর জন্য Node.js worker threads দেয়।

Example:

```js
const {
  Worker,
} = require("worker_threads");
```

এগুলো separate thread এ heavy task run করে।

---

# 📌 Context Switching

CPU যখন:

```text
এক process/thread থেকে আরেকটায় যায়
```

তখন তাকে context switching বলে।

---

# 🔹 Process Context Switch

Heavy

কারণ:

- আলাদা memory
- আলাদা resources

---

# 🔹 Thread Context Switch

Lightweight

কারণ:

- Shared memory

---

# 🧠 Concurrency vs Parallelism

---

# 🔹 Concurrency

একাধিক task manage করা।

```text
Task A
Task B
Task A
Task B
```

---

# 🔹 Parallelism

একই সময়ে multiple CPU core এ task run।

```text
Core 1 → Task A
Core 2 → Task B
```

---

# 🚀 Node.js আসলে কী?

Node.js primarily:

✅ Concurrent  
✅ Event Driven  
✅ Non Blocking

কিন্তু pure parallel না (default single thread এর জন্য)।

---

# 🌍 Real Backend Example

ধরো:

১০,০০০ user request পাঠালো।

Traditional blocking server:

```text
1 request → wait
2 request → wait
```

কিন্তু Node.js:

```text
সব request queue করে
background I/O করে
callback handle করে
```

তাই Node.js scalable।

---

# 🌐 Browser এ Process & Thread

Chrome এ:

প্রতিটি tab আলাদা process হতে পারে।

একটি tab crash করলে পুরো browser crash করে না।

---

# 🎯 Interview Questions

---

# ❓ Q1: Process কী?

> Running program এর instance।

---

# ❓ Q2: Thread কী?

> Process এর ভিতরের execution unit।

---

# ❓ Q3: Main Difference কী?

```text
Process → isolated memory
Thread → shared memory
```

---

# ❓ Q4: Node.js Single Threaded কেন?

কারণ JavaScript execution এর জন্য single main thread ব্যবহার করে।

---

# ❓ Q5: তাহলে Node.js Fast কেন?

কারণ:

- Event Loop
- Async I/O
- Background Threads
- Non Blocking Architecture

---

# 🧠 Quick Revision Summary

---

# 🔹 Process

✅ Independent  
✅ Own Memory  
✅ Heavyweight  
✅ Secure

---

# 🔹 Thread

✅ Lightweight  
✅ Shared Memory  
✅ Faster Communication  
✅ Same Process এর worker

---

# 🔹 Node.js

✅ Single Main Thread  
✅ Event Loop  
✅ Background Thread Pool  
✅ Async Non-Blocking

---

# 🚀 Super Short Interview Answer

> Process হলো running program এবং Thread হলো সেই process এর execution unit।  
> Multiple thread একই process এর memory share করে।  
> Node.js JavaScript execution এর জন্য single thread ব্যবহার করলেও background এ multiple threads ব্যবহার করে async operation handle করে।