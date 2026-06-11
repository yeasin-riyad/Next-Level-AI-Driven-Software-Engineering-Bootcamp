# 📚 SQL Advanced Concepts: Subquery, Functions & Stored Procedures

## 🎯 Introduction

SQL শুধু data store বা retrieve করার জন্য না—এটা একটি powerful language যা দিয়ে আমরা complex logic, automation, এবং reusable operations তৈরি করতে পারি।

এই README-তে আমরা শিখব:

* Subquery
* Built-in & User Defined Functions
* Stored Procedures
* Real-world use cases
* Interview-ready explanations

---

# 🔹 1️⃣ Subquery (Query inside Query)

## 📖 কী?

Subquery হলো এমন একটি query যা অন্য একটি query-এর ভিতরে থাকে এবং outer query-কে data প্রদান করে।

---

## 🧠 Concept

```text
Outer Query
    ↑
Inner Query (Subquery)
```

---

## 🧪 Example

### Students Table

| StudentID | Name   | GPA  |
| --------- | ------ | ---- |
| 1         | Rahim  | 3.80 |
| 2         | Karim  | 3.50 |
| 3         | Jannat | 3.95 |

---

## 🏆 Highest GPA Student

```sql
SELECT Name
FROM Students
WHERE GPA = (
    SELECT MAX(GPA)
    FROM Students
);
```

---

## ⚙️ Execution Flow

```text
Step 1: Inner Query → MAX(GPA) = 3.95
Step 2: Outer Query → match GPA = 3.95
Result → Jannat
```

---

## 🎯 Types of Subquery

### 1️⃣ Single Row Subquery

```sql
SELECT *
FROM Students
WHERE GPA > (
    SELECT AVG(GPA)
    FROM Students
);
```

---

### 2️⃣ Multiple Row Subquery

```sql
SELECT *
FROM Students
WHERE StudentID IN (
    SELECT StudentID
    FROM Enrollments
);
```

---

### 3️⃣ Correlated Subquery

```sql
SELECT Name, GPA
FROM Students s
WHERE GPA > (
    SELECT AVG(GPA)
    FROM Students
    WHERE DepartmentID = s.DepartmentID
);
```

---

## 🎯 Interview Definition

A Subquery is a query nested inside another SQL query used to return intermediate results for the outer query.

---

# 🔹 2️⃣ SQL Functions

## 📖 কী?

Function হলো reusable block যা input নিয়ে processing করে একটি value return করে।

---

## 🔥 Types of Functions

---

## 1️⃣ Built-in Functions

### 🔡 String Functions

```sql
UPPER(Name)
LOWER(Name)
LENGTH(Name)
CONCAT(Name, ' BD')
```

---

### 🧪 Example

```sql
SELECT UPPER(Name)
FROM Students;
```

---

## 🔢 Numeric Functions

```sql
ROUND(3.1416, 2)
CEIL(4.2)
FLOOR(4.9)
ABS(-10)
```

---

## 📅 Date Functions

```sql
NOW()
CURRENT_DATE
CURRENT_TIMESTAMP
```

---

## 2️⃣ User Defined Function (UDF)

```sql
CREATE FUNCTION GPA_TO_PERCENTAGE(gpa NUMERIC)
RETURNS NUMERIC
AS $$
BEGIN
    RETURN (gpa / 4.0) * 100;
END;
$$ LANGUAGE plpgsql;
```

---

## 🧪 Usage

```sql
SELECT GPA_TO_PERCENTAGE(3.8);
```

---

## 🎯 Function Characteristics

| Feature           | Function |
| ----------------- | -------- |
| Returns Value     | ✅        |
| Used in SELECT    | ✅        |
| Reusable          | ✅        |
| Lightweight Logic | ✅        |

---

# 🔹 3️⃣ Stored Procedure

## 📖 কী?

Stored Procedure হলো database-এর ভিতরে stored program যা multiple SQL operations execute করতে পারে।

---

## 🧠 Concept

```text
Input → Processing → DB Operations → Result (optional)
```

---

## 🧪 Example

```sql
CREATE PROCEDURE AddStudent(
    name VARCHAR(50),
    email VARCHAR(100)
)
LANGUAGE SQL
AS $$
INSERT INTO Students(Name, Email)
VALUES(name, email);
$$;
```

---

## ▶️ Execute Procedure

```sql
CALL AddStudent('Rahim', 'rahim@gmail.com');
```

---

## 💰 Real Example (Bank Transfer)

```sql
CREATE PROCEDURE TransferMoney(
    sender INT,
    receiver INT,
    amount NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN

UPDATE Accounts
SET Balance = Balance - amount
WHERE AccountID = sender;

UPDATE Accounts
SET Balance = Balance + amount
WHERE AccountID = receiver;

END;
$$;
```

---

## 🎯 Procedure Benefits

* Automates tasks
* Reduces code duplication
* Improves performance
* Centralized business logic

---

# 🔄 Function vs Procedure

| Feature           | Function    | Procedure      |
| ----------------- | ----------- | -------------- |
| Returns Value     | ✅           | ❌ Optional     |
| Used in SELECT    | ✅           | ❌              |
| Data Modification | Limited     | Full           |
| Use Case          | Calculation | Business Logic |

---

# 🧠 Easy Memory Trick

```text
Subquery  → Query inside Query
Function  → Returns Value
Procedure → Performs Action
```

---

# 🌍 Real-World Use Cases

## Subquery

* Top student
* Above average filtering

## Function

* GPA calculation
* Tax calculation
* Formatting data

## Procedure

* User registration
* Payment transfer
* Order processing

---

# 🎤 Interview Answer

Subquery is a nested query used inside another query.
Function is a reusable block that returns a value.
Stored Procedure is a set of SQL statements used to perform operations in the database.

---

# 🚀 Conclusion

These three concepts are the backbone of advanced SQL:

* Subquery → Smart data retrieval
* Function → Reusable logic
* Procedure → Automated workflows

Mastering them will significantly improve your backend and system design skills.
