# 📚 SQL Triggers & Indexing (Complete Bangla Guide)

## 🎯 Introduction

Database Management System (DBMS)-এ **Triggers** এবং **Indexes** দুটি অত্যন্ত গুরুত্বপূর্ণ বিষয়।

* **Trigger** → Database Event ঘটলে Automatically Action Execute করে।
* **Index** → Query Performance Improve করে এবং Data দ্রুত খুঁজে বের করতে সাহায্য করে।

এই দুইটি Concept Backend Development, Database Design এবং SQL Interview-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।

---

# 🔥 Part 1: Triggers

## 📖 Trigger কী?

Trigger হলো Database-এর একটি Special Program যা Automatically Execute হয় যখন কোনো নির্দিষ্ট Event ঘটে।

### Supported Events

* INSERT
* UPDATE
* DELETE

---

## 🧠 Trigger Working Flow

```text
Database Event
      │
      ▼
Trigger Fires
      │
      ▼
Action Executes
```

---

# Types of Triggers

## 1️⃣ BEFORE Trigger

Event Execute হওয়ার আগে Trigger Run হয়।

### Example

```text
BEFORE INSERT
BEFORE UPDATE
BEFORE DELETE
```

### Use Cases

* Data Validation
* Business Rule Checking
* Invalid Data Prevent করা

---

## 2️⃣ AFTER Trigger

Event সম্পন্ন হওয়ার পরে Trigger Run হয়।

### Example

```text
AFTER INSERT
AFTER UPDATE
AFTER DELETE
```

### Use Cases

* Audit Logging
* Notifications
* Activity Tracking

---

# 🧪 Example 1: Audit Log Trigger

## Students Table

```sql
CREATE TABLE Students (
    StudentID INT,
    Name VARCHAR(50)
);
```

---

## Log Table

```sql
CREATE TABLE StudentLogs (
    LogID SERIAL PRIMARY KEY,
    Message TEXT,
    CreatedAt TIMESTAMP
);
```

---

## Trigger Function

```sql
CREATE OR REPLACE FUNCTION log_student_insert()
RETURNS TRIGGER
AS $$
BEGIN

    INSERT INTO StudentLogs(
        Message,
        CreatedAt
    )
    VALUES(
        'New Student Added',
        NOW()
    );

    RETURN NEW;

END;
$$ LANGUAGE plpgsql;
```

---

## Create Trigger

```sql
CREATE TRIGGER student_insert_trigger
AFTER INSERT
ON Students
FOR EACH ROW
EXECUTE FUNCTION log_student_insert();
```

---

## Execution

```sql
INSERT INTO Students
VALUES (1, 'Rahim');
```

### Result

```text
New Student Added
```

Automatically StudentLogs Table-এ Insert হবে।

---

# 🧪 Example 2: Salary Validation Trigger

## Trigger Function

```sql
CREATE OR REPLACE FUNCTION validate_salary()
RETURNS TRIGGER
AS $$
BEGIN

    IF NEW.Salary < 0 THEN
        RAISE EXCEPTION
        'Salary cannot be negative';
    END IF;

    RETURN NEW;

END;
$$ LANGUAGE plpgsql;
```

---

## Create Trigger

```sql
CREATE TRIGGER salary_validation_trigger
BEFORE INSERT
ON Employees
FOR EACH ROW
EXECUTE FUNCTION validate_salary();
```

---

## Invalid Insert

```sql
INSERT INTO Employees
VALUES (1,'Rahim',-5000);
```

### Result

```text
ERROR:
Salary cannot be negative
```

---

# OLD vs NEW

Trigger-এর ভিতরে দুটি Special Object ব্যবহার করা হয়।

## NEW

নতুন Row-এর Data।

```sql
NEW.Name
NEW.Salary
```

---

## OLD

আগের Row-এর Data।

```sql
OLD.Name
OLD.Salary
```

---

## Example

```sql
UPDATE Students
SET Name='Karim'
WHERE StudentID=1;
```

Trigger-এ:

```text
OLD.Name = Rahim

NEW.Name = Karim
```

---

# Trigger Use Cases

### Audit Logging

```text
User Activity Track করা
```

### Validation

```text
Invalid Data Prevent করা
```

### Auto Timestamp

```text
UpdatedAt Automatically Update করা
```

### Security Monitoring

```text
Sensitive Changes Monitor করা
```

---

# Advantages of Triggers

✅ Automatic Execution

✅ Centralized Validation

✅ Audit Support

✅ Data Integrity

---

# Disadvantages of Triggers

❌ Debug করা কঠিন

❌ Hidden Logic

❌ Performance Impact হতে পারে

---

# ⚡ Part 2: Indexing

## 📖 Index কী?

Index হলো Database-এর Special Data Structure যা Data দ্রুত Search করতে সাহায্য করে।

---

## 🧠 Real-Life Example

ধরো 1000 Page-এর একটি বই আছে।

### Without Index

```text
Page 1
Page 2
Page 3
...
Page 1000
```

সব Page Search করতে হবে।

⏳ Slow

---

### With Index

```text
Index Page
   │
   ▼
Required Topic → Page 550
```

⚡ Fast

---

# Database Search Without Index

```sql
SELECT *
FROM Users
WHERE Email='rahim@gmail.com';
```

Database করবে:

```text
Row 1
Row 2
Row 3
...
Row 1,000,000
```

এটাকে বলে:

```text
Full Table Scan
```

Time Complexity:

```text
O(n)
```

---

# Database Search With Index

## Create Index

```sql
CREATE INDEX idx_email
ON Users(Email);
```

---

## Query

```sql
SELECT *
FROM Users
WHERE Email='rahim@gmail.com';
```

Database সরাসরি Index ব্যবহার করবে।

Time Complexity:

```text
O(log n)
```

---

# 🌳 B+ Tree Index

Most Relational Databases B+ Tree ব্যবহার করে।

---

## Structure

```text
             [50]
           /      \
        [20]      [80]
       /   \      /   \
    ...   ...  ...   ...
```

---

## Why B+ Tree?

✅ Sorted Data

✅ Fast Search

✅ Fast Insert

✅ Efficient Range Query

---

# Types of Indexes

## 1️⃣ Primary Index

Primary Key-এর উপর Automatically Create হয়।

```sql
PRIMARY KEY(StudentID)
```

---

## 2️⃣ Unique Index

Duplicate Value Prevent করে।

```sql
CREATE UNIQUE INDEX idx_email
ON Users(Email);
```

---

## 3️⃣ Composite Index

Multiple Column-এর উপর Index।

```sql
CREATE INDEX idx_name_city
ON Users(Name, City);
```

---

### Best For

```sql
WHERE Name='Rahim'
AND City='Dhaka'
```

---

## 4️⃣ Clustered Index

Data Physically Sorted থাকে।

```text
Table Data + Index Together
```

---

## 5️⃣ Non-Clustered Index

Separate Structure Maintain করে।

```text
Index → Pointer → Actual Data
```

---

# When Should You Create Indexes?

### Good Candidates

✅ Primary Keys

✅ Foreign Keys

✅ Frequently Searched Columns

✅ WHERE Conditions

✅ JOIN Columns

✅ ORDER BY Columns

---

# When NOT to Create Indexes?

❌ Very Small Tables

❌ Frequently Updated Columns

❌ Rarely Queried Columns

---

# Index Drawbacks

## Extra Storage

Index Additional Space নেয়।

---

## Slower Writes

```sql
INSERT
UPDATE
DELETE
```

Operations-এর সময় Index Update করতে হয়।

---

# 📊 Trigger vs Index

| Feature           | Trigger    | Index       |
| ----------------- | ---------- | ----------- |
| Purpose           | Automation | Fast Search |
| Auto Execute      | ✅          | ❌           |
| Query Performance | ❌          | ✅           |
| Data Integrity    | ✅          | ❌           |
| Logging           | ✅          | ❌           |

---

# 🎤 Interview Answer

## What is a Trigger?

A Trigger is a database object that automatically executes when INSERT, UPDATE, or DELETE events occur.

---

## What is an Index?

An Index is a special data structure that improves query performance by allowing the database to locate rows efficiently.

---

## Which Data Structure is Used for Indexing?

Most relational databases use:

```text
B+ Tree
```

Other Index Types:

```text
Hash Index
Bitmap Index
GIN Index
GiST Index
```

---

# 🧠 Easy Memory Trick

```text
Trigger
=
Automatic Action

Index
=
Fast Search

Trigger
=
Integrity

Index
=
Performance
```

---

# 🚀 Conclusion

```text
Triggers
    ↓
Automation & Data Integrity

Indexes
    ↓
Fast Data Retrieval & Query Optimization
```

Triggers এবং Indexes উভয়ই Modern Database Systems-এর অত্যন্ত গুরুত্বপূর্ণ অংশ। Trigger Database Automation নিশ্চিত করে, আর Index Query Performance বহুগুণ বৃদ্ধি করে।
