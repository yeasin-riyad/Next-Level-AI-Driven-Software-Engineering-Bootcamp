# 📚 SQL Data Types (Integer, Boolean, Character, Date, UUID)

## 🎯 ভূমিকা

Database-এ Data Store করার আগে আমাদের নির্ধারণ করতে হয় Data-এর ধরন (Data Type) কী হবে।

Data Type নির্ধারণ করে:

* কোন ধরনের Value Store করা যাবে
* কত Storage ব্যবহার হবে
* কীভাবে Data Validate হবে
* Query Performance কেমন হবে

> সহজ ভাষায়, Data Type হলো Database-কে বলে দেওয়া যে একটি Column-এ কী ধরনের Data রাখা যাবে।

---

# 📊 SQL Data Types Overview

| Data Type | ব্যবহার                    |
| --------- | -------------------------- |
| INTEGER   | পূর্ণ সংখ্যা সংরক্ষণ       |
| BOOLEAN   | TRUE/FALSE সংরক্ষণ         |
| CHAR      | Fixed Length Text          |
| VARCHAR   | Variable Length Text       |
| DATE      | Date সংরক্ষণ               |
| UUID      | Globally Unique Identifier |

---

# 1️⃣ Integer Type

## 📖 Integer কী?

Integer Type শুধুমাত্র পূর্ণ সংখ্যা (Whole Number) সংরক্ষণ করতে ব্যবহৃত হয়।

---

## SQL Example

```sql
CREATE TABLE Students(
    StudentID INT,
    Age INT
);
```

---

## Sample Data

| StudentID | Age |
| --------- | --- |
| 101       | 22  |
| 102       | 25  |
| 103       | 21  |

---

## Integer Types

| Type          | Storage          | Range                           |
| ------------- | ---------------- | ------------------------------- |
| SMALLINT      | 2 Bytes (16 Bit) | -32,768 to 32,767               |
| INT / INTEGER | 4 Bytes (32 Bit) | -2,147,483,648 to 2,147,483,647 |
| BIGINT        | 8 Bytes (64 Bit) | Very Large Numbers              |

---

## Real Use Cases

* Age
* Quantity
* Employee ID
* Product Count

---

# 2️⃣ Boolean Type

## 📖 Boolean কী?

Boolean Type শুধুমাত্র দুটি Value Store করতে পারে:

```text
TRUE
FALSE
```

---

## SQL Example

```sql
CREATE TABLE Users(
    UserID INT,
    IsActive BOOLEAN
);
```

---

## Sample Data

| UserID | IsActive |
| ------ | -------- |
| 1      | TRUE     |
| 2      | FALSE    |

---

## Real Use Cases

* User Active কিনা
* Email Verified কিনা
* Payment Completed কিনা
* Product Available কিনা

---

## Query Example

```sql
SELECT *
FROM Users
WHERE IsActive = TRUE;
```

---

# 3️⃣ Character Type

## 📖 Character Type কী?

Text বা String Data Store করার জন্য Character Type ব্যবহার করা হয়।

---

# CHAR

Fixed Length Text Store করে।

---

## SQL Example

```sql
CREATE TABLE Country(
    CountryCode CHAR(3)
);
```

---

### Sample Data

```text
USA
IND
BGD
```

---

## বৈশিষ্ট্য

* Fixed Length
* Extra Space Padding হয়

---

# VARCHAR

Variable Length Text Store করে।

---

## SQL Example

```sql
CREATE TABLE Students(
    Name VARCHAR(50)
);
```

---

### Sample Data

```text
Rahim
Karim
Jannat
```

---

## বৈশিষ্ট্য

* Variable Length
* যতটুকু দরকার ততটুকু Storage ব্যবহার করে

---

## CHAR vs VARCHAR

| CHAR          | VARCHAR                   |
| ------------- | ------------------------- |
| Fixed Length  | Variable Length           |
| Faster Access | Better Storage Efficiency |
| Padding হয়   | Padding হয় না            |

---

# 4️⃣ Date Type

## 📖 Date কী?

Date Type তারিখ (Date) সংরক্ষণ করার জন্য ব্যবহৃত হয়।

---

## SQL Example

```sql
CREATE TABLE Students(
    DOB DATE
);
```

---

## Sample Data

```text
2000-05-15
1999-12-20
2002-07-01
```

---

## Standard Format

```text
YYYY-MM-DD
```

---

## Query Example

```sql
SELECT *
FROM Students
WHERE DOB > '2000-01-01';
```

---

# Related Date Types

| Type      | Purpose        |
| --------- | -------------- |
| DATE      | শুধুমাত্র Date |
| TIME      | শুধুমাত্র Time |
| TIMESTAMP | Date + Time    |

---

## TIMESTAMP Example

```text
2026-06-08 10:30:45
```

---

## Real Use Cases

* Birth Date
* Joining Date
* Order Date
* Created At
* Updated At

---

# 5️⃣ UUID Type

## 📖 UUID কী?

UUID এর পূর্ণরূপ:

```text
Universally Unique Identifier
```

এটি একটি Globally Unique Identifier।

---

## UUID Example

```text
550e8400-e29b-41d4-a716-446655440000
```

---

## SQL Example (PostgreSQL)

```sql
CREATE TABLE Users(
    UserID UUID PRIMARY KEY
);
```

---

## Sample Data

| UserID                               |
| ------------------------------------ |
| 550e8400-e29b-41d4-a716-446655440000 |
| 7b4f9b22-df51-4a1d-bc9c-9cde5c89d123 |

---

## UUID কেন ব্যবহার করা হয়?

ধরুন:

```text
UserID = 1
UserID = 2
UserID = 3
```

এগুলো Predict করা সহজ।

কিন্তু UUID:

```text
550e8400-e29b-41d4-a716-446655440000
```

Guess করা প্রায় অসম্ভব।

---

## UUID-এর সুবিধা

✅ Globally Unique

✅ Distributed Systems-এর জন্য উপযুক্ত

✅ Better Security

✅ Microservices Architecture-এ জনপ্রিয়

---

## UUID-এর অসুবিধা

❌ Integer-এর তুলনায় বেশি Storage লাগে

❌ Index Size বড় হয়

---

# 🌍 Real World Example

```sql
CREATE TABLE Users(
    UserID UUID PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    IsActive BOOLEAN,
    CreatedAt DATE
);
```

---

## Table Example

| UserID | Name  | Age | IsActive | CreatedAt  |
| ------ | ----- | --- | -------- | ---------- |
| UUID   | Rahim | 25  | TRUE     | 2026-01-10 |
| UUID   | Karim | 30  | FALSE    | 2026-03-15 |

---

# 📊 Summary Table

| Data Type | Example                              |
| --------- | ------------------------------------ |
| INTEGER   | 25                                   |
| BOOLEAN   | TRUE                                 |
| CHAR      | BGD                                  |
| VARCHAR   | Rahim                                |
| DATE      | 2026-06-08                           |
| UUID      | 550e8400-e29b-41d4-a716-446655440000 |

---

# 🎤 Interview Answer

### SQL-এ Integer, Boolean, Character, Date এবং UUID কী?

* Integer পূর্ণ সংখ্যা সংরক্ষণ করে।
* Boolean TRUE/FALSE Value সংরক্ষণ করে।
* Character (CHAR/VARCHAR) Text Data সংরক্ষণ করে।
* Date Date এবং Time সম্পর্কিত Data সংরক্ষণ করে।
* UUID Globally Unique Identifier তৈরি করে যা Distributed Systems এবং Modern Applications-এ ব্যাপকভাবে ব্যবহৃত হয়।

---

# 🧠 সহজে মনে রাখার ট্রিক

```text
INTEGER  → Number

BOOLEAN  → True / False

CHAR     → Fixed Text

VARCHAR  → Variable Text

DATE     → Date

UUID     → Unique ID
```

---

# 🚀 উপসংহার

SQL Data Types Database Design-এর একটি মৌলিক বিষয়। সঠিক Data Type নির্বাচন করলে:

✅ Storage Efficient হয়

✅ Query Performance উন্নত হয়

✅ Data Integrity বজায় থাকে

✅ Database আরও Scalable এবং Maintainable হয়

তাই Database Design করার সময় সবসময় Requirement অনুযায়ী উপযুক্ত Data Type নির্বাচন করা উচিত।
