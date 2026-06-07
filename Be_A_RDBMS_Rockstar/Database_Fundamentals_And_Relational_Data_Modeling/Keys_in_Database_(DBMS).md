# 🔑 DBMS-এ Keys (কী)

## 🎯 ভূমিকা

Relational Database Management System (RDBMS)-এ **Key** হলো একটি Attribute অথবা একাধিক Attribute-এর সমষ্টি, যা Table-এর প্রতিটি Record-কে Uniquely Identify করতে এবং বিভিন্ন Table-এর মধ্যে Relationship তৈরি করতে ব্যবহৃত হয়।

Keys Database-এর অন্যতম গুরুত্বপূর্ণ ধারণা, কারণ এগুলো:

* প্রতিটি Record-কে Uniquely Identify করে
* Duplicate Data প্রতিরোধ করে
* Data Integrity বজায় রাখে
* বিভিন্ন Table-এর মধ্যে Relationship তৈরি করে

---

# 📊 উদাহরণ Table

## Students

| StudentID | Name   | Email                                       |
| --------- | ------ | ------------------------------------------- |
| 101       | Rahim  | [rahim@gmail.com](mailto:rahim@gmail.com)   |
| 102       | Karim  | [karim@gmail.com](mailto:karim@gmail.com)   |
| 103       | Jannat | [jannat@gmail.com](mailto:jannat@gmail.com) |

---

## Enrollments

| EnrollmentID | StudentID | Course          |
| ------------ | --------- | --------------- |
| 1            | 101       | DBMS            |
| 2            | 102       | OOP             |
| 3            | 101       | Data Structures |

---

# 1️⃣ Super Key

## 📖 Super Key কী?

যেকোনো Attribute অথবা Attribute-এর Combination যা একটি Record-কে Uniquely Identify করতে পারে, তাকে **Super Key** বলে।

### উদাহরণ

```text
StudentID
Email
(StudentID, Name)
(StudentID, Email)
```

---

### বৈশিষ্ট্য

✅ প্রতিটি Record Uniquely Identify করে

❌ অতিরিক্ত Attribute থাকতে পারে

---

# 2️⃣ Candidate Key

## 📖 Candidate Key কী?

Minimal Super Key-কে **Candidate Key** বলা হয়।

অর্থাৎ, এমন একটি Super Key যেখানে কোনো অপ্রয়োজনীয় Attribute নেই।

### উদাহরণ

```text
StudentID
Email
```

উভয়ই Unique এবং Minimal।

---

### বৈশিষ্ট্য

✅ Unique

✅ Minimal

---

# 3️⃣ Primary Key

## 📖 Primary Key কী?

Candidate Key গুলোর মধ্যে যেটিকে Record-এর প্রধান Identifier হিসেবে নির্বাচন করা হয়, তাকে **Primary Key** বলা হয়।

### SQL Example

```sql
CREATE TABLE Students(
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(100)
);
```

---

### বৈশিষ্ট্য

✅ Unique

✅ NULL হতে পারে না

✅ প্রতি Table-এ মাত্র একটি Primary Key থাকে

---

# 4️⃣ Alternate Key

## 📖 Alternate Key কী?

Candidate Key গুলোর মধ্যে যেগুলো Primary Key হিসেবে নির্বাচিত হয় না, সেগুলোকে **Alternate Key** বলা হয়।

### উদাহরণ

Candidate Keys:

```text
StudentID
Email
```

Primary Key:

```text
StudentID
```

Alternate Key:

```text
Email
```

---

# 5️⃣ Composite Key

## 📖 Composite Key কী?

দুই বা ততোধিক Attribute একত্রে একটি Unique Identifier তৈরি করলে তাকে **Composite Key** বলা হয়।

### উদাহরণ

| StudentID | CourseID |
| --------- | -------- |
| 101       | CSE101   |
| 101       | CSE102   |

Composite Key:

```text
(StudentID, CourseID)
```

---

### SQL Example

```sql
PRIMARY KEY(StudentID, CourseID)
```

---

# 6️⃣ Foreign Key

## 📖 Foreign Key কী?

একটি Table-এর এমন একটি Attribute যা অন্য Table-এর Primary Key-কে Reference করে, তাকে **Foreign Key** বলা হয়।

---

## Students

| StudentID (PK) | Name  |
| -------------- | ----- |
| 101            | Rahim |
| 102            | Karim |

---

## Enrollments

| EnrollmentID | StudentID (FK) | Course |
| ------------ | -------------- | ------ |
| 1            | 101            | DBMS   |
| 2            | 102            | OOP    |

---

### SQL Example

```sql
CREATE TABLE Enrollments(
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,

    FOREIGN KEY(StudentID)
    REFERENCES Students(StudentID)
);
```

---

### উদ্দেশ্য

* Table-এর মধ্যে Relationship তৈরি করা
* Referential Integrity বজায় রাখা

---

# 7️⃣ Unique Key

## 📖 Unique Key কী?

Unique Key কোনো Column-এ Duplicate Value প্রবেশ করতে দেয় না।

### SQL Example

```sql
CREATE TABLE Students(
    StudentID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
```

---

### বৈশিষ্ট্য

✅ Duplicate Value অনুমোদিত নয়

✅ অনেক DBMS-এ NULL Allow করতে পারে

---

# 8️⃣ Natural Key

## 📖 Natural Key কী?

বাস্তব জগতের (Real World) কোনো Unique Identifier ব্যবহার করে তৈরি Key-কে **Natural Key** বলা হয়।

### উদাহরণ

```text
National ID Number
Passport Number
Email Address
```

---

# 9️⃣ Surrogate Key

## 📖 Surrogate Key কী?

System Generated এমন একটি Key যার কোনো Business Meaning নেই, তাকে **Surrogate Key** বলা হয়।

### উদাহরণ

```text
StudentID = 101
StudentID = 102
StudentID = 103
```

---

### SQL Example

```sql
StudentID INT AUTO_INCREMENT
```

---

# 🎨 Keys-এর মধ্যে সম্পর্ক

```text
Super Key
    │
    ▼
Candidate Key
    │
    ▼
Primary Key

Remaining Candidate Keys
    │
    ▼
Alternate Keys

Primary Key (Table A)
    │
    ▼
Foreign Key (Table B)
```

---

# 📋 সংক্ষিপ্ত সারাংশ

| Key Type      | কাজ                                  |
| ------------- | ------------------------------------ |
| Super Key     | Record Uniquely Identify করে         |
| Candidate Key | Minimal Super Key                    |
| Primary Key   | Record-এর প্রধান Identifier          |
| Alternate Key | Primary Key না হওয়া Candidate Key   |
| Composite Key | একাধিক Column-এর সমন্বয়ে Key        |
| Foreign Key   | Table-এর মধ্যে Relationship তৈরি করে |
| Unique Key    | Duplicate Data প্রতিরোধ করে          |
| Natural Key   | Real-World Unique Identifier         |
| Surrogate Key | System Generated Identifier          |

---

# 🎤 Interview Answer

### DBMS-এ Keys-এর প্রকারভেদ কী কী?

DBMS-এ প্রধানত নিম্নলিখিত ধরনের Keys ব্যবহৃত হয়:

* Super Key
* Candidate Key
* Primary Key
* Alternate Key
* Composite Key
* Foreign Key
* Unique Key
* Natural Key
* Surrogate Key

Keys-এর মূল কাজ হলো Record-কে Uniquely Identify করা, Data Integrity বজায় রাখা এবং বিভিন্ন Table-এর মধ্যে Relationship তৈরি করা।

---

# 🚀 উপসংহার

Keys হলো DBMS-এর অন্যতম গুরুত্বপূর্ণ ধারণা। এগুলো Database-এর Record-গুলোকে Unique রাখে, Duplicate Data প্রতিরোধ করে এবং Table-গুলোর মধ্যে সম্পর্ক তৈরি করতে সাহায্য করে। Database Design, Normalization এবং Technical Interview-এর জন্য Keys সম্পর্কে পরিষ্কার ধারণা থাকা অত্যন্ত গুরুত্বপূর্ণ।
