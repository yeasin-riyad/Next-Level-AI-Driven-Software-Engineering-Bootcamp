# 📚 Anatomy of a Table (Relation) in DBMS

## 🎯 Introduction

In a Relational Database Management System (RDBMS), data is stored in the form of **Tables (Relations)**. Understanding the anatomy of a table is one of the most important concepts in Database Design and DBMS interviews.

A table consists of rows and columns that represent data in a structured format.

---

# 📊 Example Relation: Students

| StudentID | Name   | Department | GPA  |
| --------- | ------ | ---------- | ---- |
| 1         | Rahim  | CSE        | 3.80 |
| 2         | Karim  | EEE        | 3.50 |
| 3         | Jannat | CSE        | 3.90 |

---

# 🏗 Anatomy of a Table

A relational table consists of the following components:

1. Relation Name
2. Attributes
3. Tuples
4. Domain
5. Degree
6. Cardinality

---

# 1️⃣ Relation Name

The name of a table is called the **Relation Name**.

### Example

```text
Students
```

Here, **Students** is the relation name.

---

# 2️⃣ Attributes (Columns)

Each column in a table is called an **Attribute**.

### Example

| StudentID | Name | Department | GPA |

Attributes are:

* StudentID
* Name
* Department
* GPA

### Key Point

> Attributes describe the properties of an entity.

---

# 3️⃣ Tuples (Rows)

Each row in a table is called a **Tuple**.

### Example

| StudentID | Name  | Department | GPA  |
| --------- | ----- | ---------- | ---- |
| 1         | Rahim | CSE        | 3.80 |

This entire row represents one tuple.

### Key Point

> A tuple represents a single record in a relation.

---

# 4️⃣ Domain

A **Domain** defines the set of valid values that an attribute can contain.

### Example

| Attribute  | Domain              |
| ---------- | ------------------- |
| StudentID  | Integer             |
| Name       | String              |
| Department | String              |
| GPA        | Float (0.00 - 4.00) |

### Key Point

> Domain ensures data integrity by restricting invalid values.

---

# 5️⃣ Degree

The number of attributes (columns) in a relation is called its **Degree**.

### Example

| StudentID | Name | Department | GPA |

Number of columns = 4

```text
Degree = 4
```

### Formula

```text
Degree = Total Number of Columns
```

---

# 6️⃣ Cardinality

The number of tuples (rows) in a relation is called its **Cardinality**.

### Example

| StudentID | Name   | Department | GPA  |
| --------- | ------ | ---------- | ---- |
| 1         | Rahim  | CSE        | 3.80 |
| 2         | Karim  | EEE        | 3.50 |
| 3         | Jannat | CSE        | 3.90 |

Number of rows = 3

```text
Cardinality = 3
```

### Formula

```text
Cardinality = Total Number of Rows
```

---

# 🎨 Visual Representation

```text
                    Relation Name
                         │
                         ▼

                   STUDENTS TABLE

┌───────────┬────────┬────────────┬──────┐
│StudentID  │ Name   │ Department │ GPA  │
├───────────┼────────┼────────────┼──────┤
│1          │Rahim   │CSE         │3.80  │
│2          │Karim   │EEE         │3.50  │
│3          │Jannat  │CSE         │3.90  │
└───────────┴────────┴────────────┴──────┘
     ▲          ▲          ▲         ▲
     │          │          │         │
           Attributes (Columns)

Rows = Tuples

Degree = 4
Cardinality = 3
```

---

# 📋 Quick Summary

| Component     | Meaning             |
| ------------- | ------------------- |
| Relation Name | Name of the table   |
| Attribute     | Column              |
| Tuple         | Row                 |
| Domain        | Valid set of values |
| Degree        | Number of columns   |
| Cardinality   | Number of rows      |

---

# 🎤 Interview Answer

### What is the Anatomy of a Table in DBMS?

A table (relation) in DBMS consists of:

* Relation Name
* Attributes (Columns)
* Tuples (Rows)
* Domain (Valid values for attributes)
* Degree (Number of columns)
* Cardinality (Number of rows)

These components collectively define the structure and organization of data in a relational database.

---

# 🚀 Conclusion

The anatomy of a relation is a fundamental concept in DBMS and Database Design. Understanding relation names, attributes, tuples, domains, degree, and cardinality is essential for designing efficient relational databases and performing normalization.
