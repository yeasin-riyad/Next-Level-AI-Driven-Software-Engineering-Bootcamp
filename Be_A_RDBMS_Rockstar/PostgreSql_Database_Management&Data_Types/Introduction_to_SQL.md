# 📚 Introduction to SQL (Structured Query Language)

## 🎯 ভূমিকা

**SQL (Structured Query Language)** হলো একটি Standard Language যা Relational Database-এর সাথে কাজ করার জন্য ব্যবহৃত হয়।

SQL ব্যবহার করে আমরা Database-এর সাথে যোগাযোগ করতে পারি এবং বিভিন্ন কাজ করতে পারি যেমন:

* Data Insert করা
* Data Read করা
* Data Update করা
* Data Delete করা
* Database Structure তৈরি ও পরিবর্তন করা

> সহজভাবে বলতে গেলে, SQL হলো Database-এর সাথে কথা বলার ভাষা।

---

# 🌍 SQL কেন ব্যবহার করা হয়?

Database শুধু Data Store করার জন্য নয়, বরং সেই Data পরিচালনা করার জন্য SQL ব্যবহার করা হয়।

SQL-এর মাধ্যমে আমরা করতে পারি:

* নতুন Data যোগ করা
* নির্দিষ্ট Data খুঁজে বের করা
* Data পরিবর্তন করা
* Data মুছে ফেলা
* Table ও Database তৈরি করা

---

# 📊 SQL-এর মূল কাজ (CRUD Operations)

## 1️⃣ Create (INSERT)

নতুন Data যোগ করার জন্য ব্যবহার হয়।

```sql id="sql_insert"
INSERT INTO Students (StudentID, Name, Department)
VALUES (101, 'Rahim', 'CSE');
```

---

## 2️⃣ Read (SELECT)

Database থেকে Data পড়ার জন্য ব্যবহার হয়।

```sql id="sql_select"
SELECT * FROM Students;
```

---

## 3️⃣ Update

Existing Data পরিবর্তন করার জন্য ব্যবহার হয়।

```sql id="sql_update"
UPDATE Students
SET Department = 'EEE'
WHERE StudentID = 101;
```

---

## 4️⃣ Delete

Data মুছে ফেলার জন্য ব্যবহার হয়।

```sql id="sql_delete"
DELETE FROM Students
WHERE StudentID = 101;
```

---

# 🏗️ SQL কোন Database-এ ব্যবহৃত হয়?

SQL সাধারণত Relational Database Management System (RDBMS)-এ ব্যবহার হয়।

উদাহরণ:

* MySQL
* PostgreSQL
* Microsoft SQL Server
* Oracle Database
* SQLite

---

# 🧩 SQL-এর Categories

## 🟢 DDL (Data Definition Language)

Database Structure তৈরি ও পরিবর্তনের জন্য ব্যবহার হয়।

```sql id="ddl_example"
CREATE TABLE Students(
    StudentID INT,
    Name VARCHAR(50)
);
```

Commands:

* CREATE
* ALTER
* DROP
* TRUNCATE

---

## 🔵 DML (Data Manipulation Language)

Data নিয়ে কাজ করার জন্য ব্যবহার হয়।

Commands:

* INSERT
* UPDATE
* DELETE

---

## 🟣 DQL (Data Query Language)

Data retrieve করার জন্য ব্যবহার হয়।

```sql id="dql_example"
SELECT * FROM Students;
```

---

## 🟠 DCL (Data Control Language)

Permission control করার জন্য ব্যবহার হয়।

Commands:

* GRANT
* REVOKE

---

## 🔴 TCL (Transaction Control Language)

Transaction manage করার জন্য ব্যবহার হয়।

Commands:

* COMMIT
* ROLLBACK
* SAVEPOINT

---

# 📌 SQL-এর সুবিধা

✅ সহজে Data manage করা যায়
✅ Standard language
✅ Fast data querying
✅ Data integrity maintain করে
✅ Almost সব RDBMS-এ support করে

---

# 🧠 Interview Answer

SQL (Structured Query Language) হলো একটি standard database language যা relational database-এর সাথে কাজ করার জন্য ব্যবহৃত হয়।

এর মাধ্যমে আমরা data create, read, update এবং delete করতে পারি (CRUD operations)। এছাড়াও SQL database structure design, permission control এবং transaction management-এর জন্য ব্যবহৃত হয়।

---

# 🚀 উপসংহার

SQL হলো আধুনিক database systems-এর backbone। এটি ছাড়া relational database পরিচালনা করা সম্ভব নয়।

SQL শেখা backend development, system design এবং data engineering-এর জন্য অত্যন্ত গুরুত্বপূর্ণ।
