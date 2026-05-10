# Thread vs Background Thread 

---

# Thread কী?

Thread হলো একটি program-এর ভিতরে ছোট execution path বা কাজ করার ইউনিট।

সহজ ভাষায়:

একটি program যখন run হয়, তখন CPU সেই program-এর instructions execute করে।  
এই execution flow-কেই thread বলা হয়।

---

# Real Life Example

ধরো তুমি একটি রেস্টুরেন্ট চালাও।

- পুরো রেস্টুরেন্ট = Process
- প্রতিটি ওয়েটার = Thread

একজন ওয়েটার অর্ডার নিচ্ছে,  
আরেকজন খাবার সার্ভ করছে,  
আরেকজন বিল নিচ্ছে।

সবাই একই রেস্টুরেন্টের resources ব্যবহার করছে, কিন্তু আলাদা আলাদা কাজ করছে।

---

# Process vs Thread

| বিষয় | Process | Thread |
|---|---|---|
| কী? | Independent program | Program-এর ভিতরের execution unit |
| Memory | আলাদা memory | Shared memory |
| Speed | Heavy | Lightweight |
| Communication | কঠিন | সহজ |

---

# Main Thread কী?

Program start হলে প্রথম যে thread তৈরি হয় তাকে Main Thread বলে।

যেমন JavaScript / Node.js এ:

```js
console.log("Start");

console.log("End");
```

এগুলো main thread-এ execute হয়।

---

# Background Thread কী?

Background Thread হলো এমন thread যা main thread-এর পিছনে কিছু heavy বা async কাজ করে।

এগুলো user interface বা main execution block না করে কাজ করে।

---

# Real Life Example

ধরো তুমি YouTube-এ video দেখছো।

একই সাথে:

- ভিডিও চলছে
- কমেন্ট লোড হচ্ছে
- notification আসছে
- ads preload হচ্ছে

এগুলো সব যদি এক thread-এ হতো তাহলে app freeze করতো 😅

তাই background thread ব্যবহার করা হয়।

---

# Single Thread

```text
[Task 1]
   ↓
[Task 2]
   ↓
[Task 3]
```

একটার পর একটা কাজ।

---

# Multiple Thread

```text
Thread 1 → Video Play
Thread 2 → Download
Thread 3 → Notification
```

একই সময়ে multiple কাজ।

---

# Background Thread কোথায় বেশি ব্যবহার হয়?

## 1. File Reading

```js
fs.readFile()
```

Node.js background thread ব্যবহার করে file পড়ে।

---

## 2. Database Query

Database operation background-এ যায়।

---

## 3. Image Processing

Heavy image resize/filter background thread-এ হয়।

---

## 4. Network Request

API call waiting main thread block করে না।

---

# Node.js এ Background Thread

অনেকে ভাবে Node.js পুরোপুরি single threaded।

আসলে:

- JavaScript execution → Single Main Thread
- কিন্তু libuv internally background thread pool ব্যবহার করে।

---

# Node.js Architecture

```text
Main Thread
    |
Event Loop
    |
libuv Thread Pool
```

---

# কোন কাজগুলো background thread-এ যায়?

Node.js এ সাধারণত:

- File System
- DNS lookup
- Crypto
- Compression

এইগুলো background thread pool-এ execute হয়।

---

# Example

```js
const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("End");
```

---

# Output

```text
Start
End
(file content)
```

কারণ:

- `readFile()` background thread-এ গেছে
- main thread block হয়নি

---

# Browser এ Background Thread

Browser-এও background threads আছে।

যেমন:

- Rendering thread
- Worker thread
- Network thread

---

# Web Worker

JavaScript heavy calculation browser freeze করতে পারে।

তাই Web Worker ব্যবহার করা হয়।

---

# Without Worker

```js
while(true){}
```

Browser freeze 😅

---

# With Worker

Heavy কাজ background-এ যাবে।

UI smooth থাকবে।

---

# Thread Safe কী?

যখন multiple thread একই data access করে তখন সমস্যা হতে পারে।

Example:

```text
Thread 1 → balance += 100
Thread 2 → balance -= 50
```

ঠিকমতো sync না করলে data corrupt হতে পারে।

এটাকে বলে Race Condition।

---

# Thread Pool কী?

বারবার নতুন thread create করা expensive।

তাই কিছু ready thread রাখা হয়।

এটাকে Thread Pool বলে।

Node.js libuv default 4 thread pool ব্যবহার করে।

---

# CPU Bound vs I/O Bound

## CPU Bound

Heavy calculation:

- Video encoding
- AI processing
- Large loop

এগুলো thread বেশি benefit পায়।

---

## I/O Bound

Waiting task:

- File read
- API request
- Database

এগুলো async/background thread-এ ভালো কাজ করে।

---

# Thread vs Background Thread

| বিষয় | Thread | Background Thread |
|---|---|---|
| কাজ | সাধারণ execution | Behind-the-scenes কাজ |
| Visibility | Direct execution | Hidden/helper execution |
| Usage | Main কাজ | Heavy/async কাজ |
| Example | JavaScript execution | File reading |

---

# Important Concept

Node.js এর JavaScript code মূলত single thread-এ চলে।

কিন্তু heavy I/O কাজগুলো:

- OS
- libuv
- Background threads

এর সাহায্যে asynchronous ভাবে execute হয়।

---

# Final Summary

- Thread = কাজ করার execution unit
- Main Thread = Program-এর primary execution
- Background Thread = Hidden helper thread
- Multiple Thread = একই সময়ে multiple কাজ
- Thread Pool = Ready-made reusable threads
- Node.js = Single main thread + background worker threads

---