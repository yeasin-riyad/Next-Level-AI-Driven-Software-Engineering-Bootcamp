# 📚 ডেটাবেস মডেলের প্রকারভেদ (Types of Database Models)

## 🎯 ভূমিকা

**Database Model** হলো এমন একটি কাঠামো যা নির্ধারণ করে Database-এর ভিতরে Data কীভাবে সংরক্ষণ, সংগঠিত এবং পরিচালিত হবে।

সহজ ভাষায়,

> Database Model নির্ধারণ করে Data-এর Structure কেমন হবে এবং Data গুলোর মধ্যে Relationship কীভাবে কাজ করবে।

---

## 🤔 Database Model কেন গুরুত্বপূর্ণ?

Database Model আমাদের সাহায্য করে:

* Data সুন্দরভাবে Organize করতে
* Data-এর মধ্যে Relationship নির্ধারণ করতে
* Data Consistency বজায় রাখতে
* Query করা সহজ করতে
* Business Requirements পূরণ করতে

---

# 1️⃣ Hierarchical Database Model

Hierarchical Model-এ Data একটি **Tree Structure** আকারে সংরক্ষণ করা হয়।

এখানে:

* একটি Parent Node থাকতে পারে
* একটি Child-এর শুধুমাত্র একটি Parent থাকে

---

## 📌 Structure

```text
CEO
│
├── Manager A
│   ├── Employee 1
│   └── Employee 2
│
└── Manager B
    ├── Employee 3
    └── Employee 4
```

---

## ✅ সুবিধা

* Structure সহজ
* Data Retrieval দ্রুত
* বোঝা সহজ

---

## ❌ অসুবিধা

* Many-to-Many Relationship Support করে না
* Structure পরিবর্তন করা কঠিন

---

## 💡 উদাহরণ

* Company Organizational Chart
* File System Structure

---

# 2️⃣ Network Database Model

Network Model হলো Hierarchical Model-এর উন্নত সংস্করণ।

এখানে:

> একটি Child-এর একাধিক Parent থাকতে পারে।

---

## 📌 Structure

```text
Student A ------ Course 1
      \           /
       \         /
        Course 2

Student B ------ Course 1
```

---

## ✅ সুবিধা

* Many-to-Many Relationship Support করে
* Hierarchical Model-এর তুলনায় বেশি Flexible

---

## ❌ অসুবিধা

* Design জটিল
* Maintenance কঠিন

---

## 💡 উদাহরণ

* Student ↔ Course
* Employee ↔ Project
* Doctor ↔ Patient

---

# 3️⃣ Relational Database Model (সবচেয়ে জনপ্রিয়)

Relational Model-এ Data Table (Relation) আকারে সংরক্ষণ করা হয়।

প্রতিটি Table:

* Row (Tuple)
* Column (Attribute)

নিয়ে গঠিত।

---

## Students Table

| StudentID | Name  |
| --------- | ----- |
| 1         | Rahim |
| 2         | Karim |

---

## Courses Table

| CourseID | Course Name |
| -------- | ----------- |
| 101      | DBMS        |
| 102      | OOP         |

---

## Enrollment Table

| StudentID | CourseID |
| --------- | -------- |
| 1         | 101      |
| 1         | 102      |
| 2         | 101      |

---

## 🔑 গুরুত্বপূর্ণ ধারণা

* Primary Key
* Foreign Key
* Relationships
* SQL Queries

---

## ✅ সুবিধা

* High Data Integrity
* Normalization Support করে
* SQL ব্যবহার করে সহজে Query করা যায়
* সবচেয়ে বেশি ব্যবহৃত Model

---

## ❌ অসুবিধা

* Horizontal Scaling তুলনামূলক কঠিন

---

## 💡 জনপ্রিয় Database

* MySQL
* PostgreSQL
* Oracle Database
* Microsoft SQL Server

---

# 4️⃣ Object-Oriented Database Model (OODBMS)

এই Model-এ Data Object আকারে সংরক্ষণ করা হয়, ঠিক Object-Oriented Programming-এর মতো।

---

## Example Class

```cpp
class Student {
public:
    int id;
    string name;
};
```

---

## Stored Object

```json
{
  "id": 1,
  "name": "Rahim"
}
```

---

## ✅ সুবিধা

* Complex Data সহজে Handle করতে পারে
* OOP Language-এর সাথে ভালো Integration

---

## ❌ অসুবিধা

* খুব বেশি জনপ্রিয় নয়
* Standardization কম

---

## 💡 ব্যবহার ক্ষেত্র

* CAD Software
* Scientific Applications
* Multimedia Systems

---

# 5️⃣ NoSQL Database Model

NoSQL-এর পূর্ণরূপ:

```text
Not Only SQL
```

এটি Large Scale এবং Flexible Data Handle করার জন্য তৈরি করা হয়েছে।

---

# 📄 Document Model

Data JSON-এর মতো Document আকারে সংরক্ষণ করা হয়।

### Example

```json
{
  "id": 1,
  "name": "Rahim",
  "skills": ["C++", "Java", "Node.js"]
}
```

### জনপ্রিয় Database

* MongoDB

---

# 🔑 Key-Value Model

Data Key এবং Value Pair আকারে সংরক্ষণ করা হয়।

### Example

```json
{
  "user_101": "Rahim"
}
```

### জনপ্রিয় Database

* Redis

---

# 📊 Column-Family Model

Data Column Family আকারে সংরক্ষণ করা হয়।

### Example

| UserID | Name  | City       |
| ------ | ----- | ---------- |
| 1      | Rahim | Dhaka      |
| 2      | Karim | Chattogram |

### জনপ্রিয় Database

* Cassandra

---

# 🌐 Graph Model

Data Node এবং Edge আকারে সংরক্ষণ করা হয়।

### Example

```text
Rahim ---- Friend ---- Karim
   \
    Works With
      \
      Jamil
```

### জনপ্রিয় Database

* Neo4j

---

## ✅ সুবিধা

* Highly Scalable
* Flexible Schema
* High Performance

---

## ❌ অসুবিধা

* Query তুলনামূলক জটিল
* RDBMS-এর তুলনায় Consistency কম হতে পারে

---

# 📊 তুলনামূলক সারণি

| Model           | Structure | Relationship Support  | Example            |
| --------------- | --------- | --------------------- | ------------------ |
| Hierarchical    | Tree      | One-to-Many           | Organization Chart |
| Network         | Graph     | Many-to-Many          | Student-Course     |
| Relational      | Tables    | সব ধরনের              | MySQL, PostgreSQL  |
| Object-Oriented | Objects   | Object Relationship   | CAD Systems        |
| NoSQL           | Flexible  | Type-এর উপর নির্ভরশীল | MongoDB, Redis     |

---

# 🎤 Interview Answer

### Database Model-এর প্রধান প্রকারভেদ কী কী?

Database Model-এর প্রধান প্রকারভেদ হলো:

1. Hierarchical Model
2. Network Model
3. Relational Model
4. Object-Oriented Model
5. NoSQL Model

বর্তমানে Structured Data-এর জন্য Relational Database সবচেয়ে বেশি ব্যবহৃত হয় এবং Large Scale ও Flexible Data-এর জন্য NoSQL Database জনপ্রিয়।

---

# 🧠 সহজে মনে রাখার উপায়

```text
Hierarchical → Tree

Network → Graph

Relational → Tables

Object-Oriented → Objects

NoSQL → Flexible Data
```

---

# 🚀 উপসংহার

Database Model নির্ধারণ করে Database-এর ভিতরে Data কীভাবে সংরক্ষণ এবং পরিচালিত হবে।

বর্তমান Software Industry-তে সবচেয়ে বেশি ব্যবহৃত হয়:

* Relational Database (MySQL, PostgreSQL)
* NoSQL Database (MongoDB, Redis, Cassandra)

কোন Model ব্যবহার করা হবে তা নির্ভর করে:

* Scalability
* Consistency
* Performance
* Data Structure

এর উপর।
