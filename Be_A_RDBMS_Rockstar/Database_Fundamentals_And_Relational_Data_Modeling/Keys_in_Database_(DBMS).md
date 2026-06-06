# 🔑 Keys in Database (DBMS)

## 🎯 Introduction

In a Relational Database Management System (RDBMS), a **Key** is an attribute or a set of attributes used to uniquely identify records and establish relationships between tables.

Keys play a crucial role in:

* Uniquely identifying records
* Preventing duplicate data
* Maintaining data integrity
* Creating relationships between tables

---

# 📊 Example Tables

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

A **Super Key** is any attribute or combination of attributes that can uniquely identify a record.

### Example

```text
StudentID
Email
(StudentID, Name)
(StudentID, Email)
```

### Characteristics

✅ Uniquely identifies records

❌ May contain unnecessary attributes

---

# 2️⃣ Candidate Key

A **Candidate Key** is a minimal Super Key.

### Example

```text
StudentID
Email
```

Both are unique and contain no unnecessary attributes.

### Characteristics

✅ Unique

✅ Minimal

---

# 3️⃣ Primary Key

A **Primary Key** is the candidate key selected to uniquely identify records in a table.

### Example

```sql
CREATE TABLE Students(
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Email VARCHAR(100)
);
```

### Characteristics

✅ Unique

✅ Cannot be NULL

✅ Only one Primary Key per table

---

# 4️⃣ Alternate Key

Candidate keys that are not selected as the Primary Key are called Alternate Keys.

### Example

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

A key formed using two or more attributes is called a Composite Key.

### Example

| StudentID | CourseID |
| --------- | -------- |
| 101       | CSE101   |
| 101       | CSE102   |

Composite Key:

```text
(StudentID, CourseID)
```

### SQL Example

```sql
PRIMARY KEY(StudentID, CourseID)
```

---

# 6️⃣ Foreign Key

A Foreign Key is a field in one table that refers to the Primary Key of another table.

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

### SQL Example

```sql
CREATE TABLE Enrollments(
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    FOREIGN KEY(StudentID)
    REFERENCES Students(StudentID)
);
```

### Purpose

* Establishes relationships
* Maintains referential integrity

---

# 7️⃣ Unique Key

A Unique Key ensures that duplicate values are not allowed.

### Example

```sql
CREATE TABLE Students(
    StudentID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
```

### Characteristics

✅ No duplicate values

✅ Usually allows NULL values (DBMS dependent)

---

# 8️⃣ Natural Key

A key derived from real-world data is called a Natural Key.

### Examples

```text
National ID Number
Passport Number
Email Address
```

---

# 9️⃣ Surrogate Key

A system-generated key with no business meaning is called a Surrogate Key.

### Examples

```text
StudentID = 101
StudentID = 102
StudentID = 103
```

### SQL Example

```sql
StudentID INT AUTO_INCREMENT
```

---

# 🎨 Relationship Between Keys

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

# 📋 Summary Table

| Key Type      | Purpose                              |
| ------------- | ------------------------------------ |
| Super Key     | Uniquely identifies records          |
| Candidate Key | Minimal Super Key                    |
| Primary Key   | Main identifier of a record          |
| Alternate Key | Candidate key not chosen as PK       |
| Composite Key | Combination of multiple columns      |
| Foreign Key   | Creates relationships between tables |
| Unique Key    | Prevents duplicate values            |
| Natural Key   | Real-world unique identifier         |
| Surrogate Key | System-generated identifier          |

---

# 🎤 Interview Answer

### What are the different types of keys in DBMS?

The main types of keys in DBMS are:

* Super Key
* Candidate Key
* Primary Key
* Alternate Key
* Composite Key
* Foreign Key
* Unique Key
* Natural Key
* Surrogate Key

Keys are used to uniquely identify records, maintain data integrity, and establish relationships between database tables.

---

# 🚀 Conclusion

Keys are one of the most fundamental concepts in DBMS. They help uniquely identify records, prevent data duplication, and create relationships between tables. A strong understanding of database keys is essential for database design, normalization, and technical interviews.
