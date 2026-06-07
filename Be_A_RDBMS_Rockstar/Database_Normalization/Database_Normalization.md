# 📚 Database Normalization (1NF, 2NF, 3NF)

## 🎯 Introduction

**Normalization** is a database design technique used to organize tables in a way that:

* Reduces data redundancy
* Avoids anomalies (Insert, Update, Delete)
* Improves data integrity
* Makes database more efficient and scalable

> In simple words: Normalization means breaking a big messy table into smaller well-structured tables.

---

# 📊 Example (Unnormalized Table)

| StudentID | StudentName | Courses   |
| --------- | ----------- | --------- |
| 101       | Rahim       | DBMS, OOP |
| 102       | Karim       | DBMS      |
| 103       | Jannat      | OOP, DSA  |

👉 Problem:

* Multiple values in a single column (Courses)
* Hard to query and maintain

---

# 1️⃣ First Normal Form (1NF)

## 📖 Definition

A table is in **1NF** if:

* Each column contains atomic (single) values
* No repeating groups or arrays
* Each record is unique

---

## ❌ Before 1NF

| StudentID | StudentName | Courses   |
| --------- | ----------- | --------- |
| 101       | Rahim       | DBMS, OOP |

---

## ✅ After 1NF

| StudentID | StudentName | Course |
| --------- | ----------- | ------ |
| 101       | Rahim       | DBMS   |
| 101       | Rahim       | OOP    |

---

## 🎯 Key Rule

```text id="1nf_rule"
No multi-valued attributes allowed
```

---

# 2️⃣ Second Normal Form (2NF)

## 📖 Definition

A table is in **2NF** if:

* It is already in 1NF
* No Partial Dependency exists
* All non-key attributes depend on the full primary key

---

## ❌ Problem (Partial Dependency)

### Enrollment Table

| StudentID | CourseID | StudentName | CourseName |
| --------- | -------- | ----------- | ---------- |
| 101       | C1       | Rahim       | DBMS       |
| 101       | C2       | Rahim       | OOP        |

👉 Issue:

* StudentName depends only on StudentID
* CourseName depends only on CourseID

This is Partial Dependency ❌

---

## ✅ After 2NF

### Students Table

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Rahim       |

---

### Courses Table

| CourseID | CourseName |
| -------- | ---------- |
| C1       | DBMS       |
| C2       | OOP        |

---

### Enrollments Table

| StudentID | CourseID |
| --------- | -------- |
| 101       | C1       |
| 101       | C2       |

---

## 🎯 Key Rule

```text id="2nf_rule"
Remove partial dependency on composite key
```

---

# 3️⃣ Third Normal Form (3NF)

## 📖 Definition

A table is in **3NF** if:

* It is already in 2NF
* No Transitive Dependency exists

---

## ❌ Problem (Transitive Dependency)

| StudentID | StudentName | DeptID | DeptName |
| --------- | ----------- | ------ | -------- |
| 101       | Rahim       | D1     | CSE      |
| 102       | Karim       | D2     | EEE      |

👉 Issue:

* StudentName → DeptID → DeptName
* DeptName depends on DeptID, not StudentID

This is Transitive Dependency ❌

---

## ✅ After 3NF

### Students Table

| StudentID | StudentName | DeptID |
| --------- | ----------- | ------ |
| 101       | Rahim       | D1     |
| 102       | Karim       | D2     |

---

### Department Table

| DeptID | DeptName |
| ------ | -------- |
| D1     | CSE      |
| D2     | EEE      |

---

## 🎯 Key Rule

```text id="3nf_rule"
Remove transitive dependency
```

---

# 📊 Normalization Summary

| Normal Form | Rule                     | Goal                           |
| ----------- | ------------------------ | ------------------------------ |
| 1NF         | Atomic values            | Remove repeating groups        |
| 2NF         | No partial dependency    | Full dependency on primary key |
| 3NF         | No transitive dependency | Remove indirect dependency     |

---

# 🔄 Full Flow Diagram

```text id="norm_flow"
Unnormalized Table
        ↓
       1NF
(No repeating groups)
        ↓
       2NF
(Remove partial dependency)
        ↓
       3NF
(Remove transitive dependency)
```

---

# 🧠 Easy Memory Trick

```text id="memory_trick"
1NF → Atomic values
2NF → Full dependency
3NF → No indirect dependency
```

---

# 🎯 Why Normalization is Important?

* Reduces Data Redundancy
* Prevents Data Anomalies
* Improves Data Consistency
* Makes Database Efficient

---

# 🎤 Interview Answer

Normalization is the process of organizing data in a database to reduce redundancy and improve integrity. It consists of:

* 1NF: Ensures atomic values and no repeating groups
* 2NF: Removes partial dependency
* 3NF: Removes transitive dependency

Together, these normal forms help design efficient and scalable relational databases.

---

# 🚀 Conclusion

Normalization is a fundamental concept in DBMS that ensures a clean, efficient, and reliable database design. Understanding 1NF, 2NF, and 3NF is essential for database design and technical interviews.
