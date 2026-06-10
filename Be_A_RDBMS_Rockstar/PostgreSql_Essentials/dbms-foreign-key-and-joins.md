# 📚 SQL: Foreign Key & Joins (INNER, LEFT, RIGHT, FULL, CROSS, NATURAL)

## 🎯 ভূমিকা

Relational Database-এ একাধিক table-এর মধ্যে সম্পর্ক (relationship) তৈরি করার জন্য **Foreign Key** এবং বিভিন্ন ধরনের **JOIN** ব্যবহার করা হয়।

এই notes-এ আমরা শিখব:

* Foreign Key কী
* Foreign Key Constraint যোগ করা
* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL OUTER JOIN
* CROSS JOIN
* NATURAL JOIN

---

# 🔗 1️⃣ Foreign Key কী?

## 📖 Definition

Foreign Key হলো এমন একটি column যা অন্য table-এর Primary Key কে reference করে।

👉 এর মাধ্যমে দুইটি table-এর মধ্যে relationship তৈরি হয়।

---

## 🧪 Example

### Students Table

| StudentID (PK) | Name  |
| -------------- | ----- |
| 1              | Rahim |
| 2              | Karim |

---

### Enrollments Table

| EnrollmentID | StudentID (FK) | Course |
| ------------ | -------------- | ------ |
| 101          | 1              | DBMS   |
| 102          | 2              | OOP    |

👉 এখানে `StudentID` হলো Foreign Key

---

## 🎯 Purpose

* Data relationship তৈরি করা
* Data integrity বজায় রাখা
* Orphan data prevent করা

---

# 🛠️ 2️⃣ Foreign Key Constraint যোগ করা

## 📖 Syntax

```sql
CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    Course VARCHAR(50),

    FOREIGN KEY (StudentID)
    REFERENCES Students(StudentID)
);
```

---

## ➕ Existing Table-এ Foreign Key Add

```sql
ALTER TABLE Enrollments
ADD CONSTRAINT fk_student
FOREIGN KEY (StudentID)
REFERENCES Students(StudentID);
```

---

## ⚠️ What happens?

👉 Enrollments টেবিলে শুধুমাত্র valid StudentID insert করা যাবে

---

# 🔥 3️⃣ INNER JOIN (Most Important)

## 📖 কী?

INNER JOIN শুধু matching data দেখায় দুই table থেকে।

---

## 🧪 Example

```sql
SELECT Students.Name, Enrollments.Course
FROM Students
INNER JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;
```

---

## 📊 Result

| Name  | Course |
| ----- | ------ |
| Rahim | DBMS   |
| Karim | OOP    |

---

## 🎯 Key Point

👉 শুধু matching data দেখাবে

---

# 🔵 4️⃣ LEFT JOIN

## 📖 কী?

LEFT JOIN বাম table-এর সব data দেখায় + matching right table data।

---

## 🧪 Example

```sql
SELECT Students.Name, Enrollments.Course
FROM Students
LEFT JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;
```

---

## 📊 Result

| Name   | Course |
| ------ | ------ |
| Rahim  | DBMS   |
| Karim  | OOP    |
| Jannat | NULL   |

---

## 🎯 Key Point

👉 Left table সব থাকবে, match না থাকলে NULL

---

# 🔴 5️⃣ RIGHT JOIN

## 📖 কী?

RIGHT JOIN right table-এর সব data দেখায় + matching left table data।

---

## 🧪 Example

```sql
SELECT Students.Name, Enrollments.Course
FROM Students
RIGHT JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;
```

---

## 🎯 Key Point

👉 Right table priority পায়

---

# 🟣 6️⃣ FULL OUTER JOIN

## 📖 কী?

FULL JOIN দুই table-এর সব data দেখায় (match + non-match)

---

## 🧪 Example

```sql
SELECT Students.Name, Enrollments.Course
FROM Students
FULL OUTER JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;
```

---

## 📊 Result

| Name   | Course |
| ------ | ------ |
| Rahim  | DBMS   |
| Karim  | OOP    |
| Jannat | NULL   |
| NULL   | AI     |

---

## 🎯 Key Point

👉 সব data দেখায় (both sides)

---

# 🔁 7️⃣ CROSS JOIN

## 📖 কী?

CROSS JOIN দুই table-এর সব possible combination তৈরি করে (Cartesian Product)

---

## 🧪 Example

```sql
SELECT Students.Name, Courses.CourseName
FROM Students
CROSS JOIN Courses;
```

---

## 📊 Result

| Student | Co511583urse |
| ------- | ------------ |
| Rahim   | DBMS         |
| Rahim   | OOP          |
| Karim   | DBMS         |
| Karim   | OOP          |

---

## 🎯 Key Point

👉 সব combination তৈরি করে

---

# 🌐 8️⃣ NATURAL JOIN

## 📖 কী?

NATURAL JOIN automatically common column দিয়ে join করে।

---

## 🧪 Example

```sql
SELECT *
FROM Students
NATURAL JOIN Enrollments;
```

---

## ⚠️ Warning

* Column name same হতে হবে
* Ambiguous behavior হতে পারে

---

## 🎯 Key Point

👉 Automatic join based on same column name

---

# 📊 ALL JOINS SUMMARY

| Join Type    | Result                |
| ------------ | --------------------- |
| INNER JOIN   | Matching data only    |
| LEFT JOIN    | Left table + matches  |
| RIGHT JOIN   | Right table + matches |
| FULL JOIN    | All data              |
| CROSS JOIN   | All combinations      |
| NATURAL JOIN | Auto matched columns  |

---

# 🧠 EASY MEMORY TRICK

```text
INNER → Match only

LEFT → Left full

RIGHT → Right full

FULL → Everything

CROSS → Combination explosion

NATURAL → Auto join
```

---

# 🎤 INTERVIEW ANSWER

Foreign Key হলো এমন একটি column যা অন্য table-এর Primary Key কে reference করে এবং relationship তৈরি করে।

JOIN হলো SQL operation যা দুই বা তার বেশি table থেকে related data combine করতে ব্যবহার হয়।

* INNER JOIN → only matching data
* LEFT JOIN → left table full + matches
* RIGHT JOIN → right table full + matches
* FULL JOIN → all data
* CROSS JOIN → all combinations
* NATURAL JOIN → automatic column-based join

---

# 🚀 CONCLUSION

Foreign Key এবং Joins হলো relational database-এর backbone।

👉 এগুলো ভালোভাবে বুঝলে:

* Complex queries সহজ হবে
* Backend development strong হবে
* Interview crack করা সহজ হবে
