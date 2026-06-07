# 🚨 Data Anomalies in DBMS

## 🎯 Introduction

In DBMS, **Data Anomalies** are problems that occur when a database is poorly designed (usually due to lack of normalization). These issues arise during **Insert, Update, and Delete operations**.

> ❗ In simple words: Bad database design → Data inconsistency & unexpected problems.

---

# 📊 Bad Design Example (Unnormalized Table)

| StudentID | StudentName | Course | Instructor |
| --------- | ----------- | ------ | ---------- |
| 101       | Rahim       | DBMS   | Tanvir     |
| 101       | Rahim       | OOP    | Hasan      |
| 102       | Karim       | DBMS   | Tanvir     |

👉 Problems:

* Same data repeated
* Hard to maintain
* Inconsistent updates possible

---

# ⚠️ Types of Data Anomalies

DBMS-এ প্রধানত ৩ ধরনের Data Anomaly দেখা যায়:

1. Insertion Anomaly
2. Update Anomaly
3. Deletion Anomaly

---

# 1️⃣ Insertion Anomaly

## 📖 Definition

When certain data cannot be inserted into the database without the presence of other unrelated data.

---

## ❌ Example

Suppose we want to add a new course:

| Course | Instructor |
| ------ | ---------- |
| AI     | Saiful     |

But table requires StudentID and StudentName → cannot insert course alone.

---

## 🚨 Problem

* Cannot insert independent data
* Forced to add irrelevant values

---

## ✅ Solution

Split tables:

* Students
* Courses
* Enrollments

---

# 2️⃣ Update Anomaly

## 📖 Definition

When updating a single piece of data requires multiple rows to be updated, leading to inconsistency.

---

## ❌ Example

| StudentID | StudentName | Instructor |
| --------- | ----------- | ---------- |
| 101       | Rahim       | Tanvir     |
| 102       | Karim       | Tanvir     |

If "Tanvir" changes to "Tanveer", all rows must be updated.

If one is missed:

❌ Inconsistent Data

---

## 🚨 Problem

* Data inconsistency
* High maintenance cost

---

## ✅ Solution

Store Instructor separately:

| InstructorID | Name   |
| ------------ | ------ |
| 1            | Tanvir |

---

# 3️⃣ Deletion Anomaly

## 📖 Definition

When deleting a record causes unintended loss of other important data.

---

## ❌ Example

| StudentID | StudentName | Course |
| --------- | ----------- | ------ |
| 101       | Rahim       | DBMS   |

If Rahim is deleted → Course info also lost.

---

## 🚨 Problem

* Loss of important data
* Unintended deletion of information

---

## ✅ Solution

Use separate tables:

* Students
* Courses
* Enrollments

---

# 📊 Summary Table

| Anomaly Type      | Problem                          |
| ----------------- | -------------------------------- |
| Insertion Anomaly | Cannot insert data independently |
| Update Anomaly    | Inconsistent updates across rows |
| Deletion Anomaly  | Unintended data loss             |

---

# 🧠 Root Cause

```text
Poor Database Design (Unnormalized Table)
```

---

# 🛠️ Solution: Normalization

Normalization breaks large tables into smaller logical tables to:

* Remove redundancy
* Improve consistency
* Avoid anomalies

---

## Before Normalization ❌

One big table → repeated data → anomalies

---

## After Normalization ✅

* Students Table
* Courses Table
* Enrollments Table

---

# 🎤 Interview Answer

Data anomalies are problems that occur in a database due to poor design. There are three main types:

* Insertion Anomaly: inability to insert data properly
* Update Anomaly: inconsistent data after update
* Deletion Anomaly: accidental loss of important data

These issues are solved using normalization, which splits large tables into smaller related tables.

---

# 🚀 Conclusion

Data anomalies highlight the importance of proper database design. By using normalization, we can eliminate redundancy and ensure data integrity and consistency.
