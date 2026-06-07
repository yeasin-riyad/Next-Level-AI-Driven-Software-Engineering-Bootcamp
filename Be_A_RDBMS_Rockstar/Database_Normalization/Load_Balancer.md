# ⚖️ Load Balancer - System Design Notes (বাংলা)

## 📌 Load Balancer কী?

Load Balancer হলো একটি System Design Component যা Incoming User Request গুলোকে একাধিক Server-এর মধ্যে সমানভাবে বিতরণ করে।

এর প্রধান উদ্দেশ্য:

* High Availability নিশ্চিত করা
* Scalability বৃদ্ধি করা
* Fault Tolerance প্রদান করা
* Server Overload প্রতিরোধ করা

---

## 🚨 Load Balancer ছাড়া

```text
           Users
             |
             v
      +-------------+
      |  Server A   |
      +-------------+
```

যদি হাজার হাজার User একই Server-এ Request পাঠায়:

* Server Slow হয়ে যেতে পারে
* Server Crash করতে পারে
* পুরো Application Down হয়ে যেতে পারে

---

## ✅ Load Balancer সহ

```text
                Users
                  |
                  v
        +------------------+
        |  Load Balancer   |
        +------------------+
           /      |      \
          /       |       \
         v        v        v

    +--------+ +--------+ +--------+
    | App A  | | App B  | | App C  |
    +--------+ +--------+ +--------+
```

Load Balancer Request গুলো বিভিন্ন Server-এ ভাগ করে দেয়।

---

# 🔄 Request Flow

একজন User যখন Website Visit করে:

```text
Browser
   |
   v
DNS
   |
   v
Load Balancer
   |
   v
Application Server
```

### Step 1

User Request পাঠায়।

```http
GET /products
```

### Step 2

DNS Domain Name Resolve করে Load Balancer-এর IP Return করে।

```text
example.com
      ↓
Load Balancer IP
```

### Step 3

Request Load Balancer-এ আসে।

### Step 4

Load Balancer Available Server নির্বাচন করে।

### Step 5

Server Request Process করে Response পাঠায়।

### Step 6

Load Balancer Response User-এর কাছে পাঠিয়ে দেয়।

---

# 🎯 Load Balancing Algorithms

## 1️⃣ Round Robin

সব Server-এ পর্যায়ক্রমে Request পাঠানো হয়।

```text
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A
```

### সুবিধা

* Simple
* Easy to Implement

### অসুবিধা

* সব Server-এর Capacity সমান ধরে নেয়

---

## 2️⃣ Weighted Round Robin

যে Server বেশি Powerful তাকে বেশি Request দেওয়া হয়।

```text
Server A Weight = 5
Server B Weight = 3
Server C Weight = 2
```

Distribution:

```text
A A A A A
B B B
C C
```

---

## 3️⃣ Least Connections

যে Server-এ Active Connection কম থাকে তাকে Request দেওয়া হয়।

```text
Server A = 100 Connections
Server B = 30 Connections
Server C = 10 Connections
```

নতুন Request যাবে:

```text
Server C
```

---

## 4️⃣ IP Hash

Client IP Address অনুযায়ী Server নির্বাচন করা হয়।

```text
192.168.1.10 → Server A
192.168.1.20 → Server B
```

একই User সাধারণত একই Server-এ যায়।

---

# ❤️ Health Check

Load Balancer নিয়মিত Server গুলোর Health Check করে।

```text
Load Balancer
      |
      +---- Server A
      +---- Server B
      +---- Server C
```

যদি:

```text
Server B Down
```

তাহলে:

```text
Request → Server A
Request → Server C
```

Server B-তে আর Traffic পাঠানো হবে না।

---

# 🔥 Failover (Active-Passive)

```text
      Primary Load Balancer
                |
                |
         Application Servers
                |
      Backup Load Balancer
```

Primary Load Balancer Fail করলে Backup Load Balancer দায়িত্ব নেয়।

এটিকে Failover বলা হয়।

---

# 🌐 Layer 4 Load Balancer

Transport Layer-এ কাজ করে।

Protocol:

* TCP
* UDP

Decision নেয়:

```text
IP Address
Port Number
```

উদাহরণ:

* AWS Network Load Balancer (NLB)

---

# 🌍 Layer 7 Load Balancer

Application Layer-এ কাজ করে।

HTTP/HTTPS Request Inspect করতে পারে।

উদাহরণ:

```text
/api/users  → User Service

/api/orders → Order Service
```

এটিকে Content-Based Routing বলা হয়।

---

# 🏗️ Real World Architecture

```text
                  Users
                     |
                     v
                    DNS
                     |
                     v
             +---------------+
             | Load Balancer |
             +---------------+
              /      |      \
             /       |       \
            v        v        v

      +---------+ +---------+ +---------+
      | App-1   | | App-2   | | App-3   |
      +---------+ +---------+ +---------+
             \       |       /
              \      |      /
               v     v     v

               +---------+
               | Database|
               +---------+
```

---

# 🎤 Interview Answer

**Load Balancer হলো এমন একটি Component যা Incoming Traffic একাধিক Server-এর মধ্যে Distribute করে। এর ফলে Scalability, High Availability এবং Fault Tolerance নিশ্চিত হয়। Load Balancer বিভিন্ন Algorithm যেমন Round Robin, Weighted Round Robin, Least Connections এবং IP Hash ব্যবহার করে Request Route করে। এছাড়া Health Check-এর মাধ্যমে Failed Server Detect করে এবং Healthy Server-এ Traffic Redirect করে। এটি Layer 4 (TCP/UDP) অথবা Layer 7 (HTTP/HTTPS) Level-এ কাজ করতে পারে।**

---

# 📚 Key Takeaways

✅ Prevents Server Overload

✅ Improves Scalability

✅ Increases Availability

✅ Provides Fault Tolerance

✅ Supports Horizontal Scaling

✅ Performs Health Checks

✅ Distributes Traffic Efficiently
