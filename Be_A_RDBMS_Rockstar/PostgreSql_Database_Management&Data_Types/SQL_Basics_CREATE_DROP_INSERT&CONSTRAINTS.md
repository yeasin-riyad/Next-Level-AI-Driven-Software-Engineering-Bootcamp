# 📚 SQL Basics: CREATE, DROP, INSERT & CONSTRAINTS

## 🎯 ভূমিকা

SQL-এ database এবং table তৈরি, মুছে ফেলা, এবং data insert করা খুবই গুরুত্বপূর্ণ operations।

এই README-তে আমরা শিখব:

* CREATE Database/Table
* DROP Database/Table
* Column Constraints
* Multiple Constraints
* INSERT Data (Different Methods)
* INSERT without column names

---

# 🏗️ CREATE DATABASE

## 📖 কী?

CREATE DATABASE ব্যবহার করে নতুন database তৈরি করা হয়।

## 🧪 Example

```sql id="create_db"
CREATE DATABASE School;
```

👉 এটি "School" নামে নতুন database তৈরি করবে।

---

# 🏗️ CREATE TABLE

## 📖 কী?

CREATE TABLE ব্যবহার করে database-এর ভিতরে table তৈরি করা হয়।

## 🧪 Example

```sql id="create_table"
CREATE TABLE Students (
    StudentID INT,
    Name VARCHAR(50),
    Age INT
);
```

---

# 🗑️ DROP DATABASE

## 📖 কী?

DROP DATABASE ব্যবহার করে পুরো database delete করা হয়।

⚠️ Warning: সব data permanently delete হয়ে যায়।

## 🧪 Example

```sql id="drop_db"
DROP DATABASE School;
```

---

# 🗑️ DROP TABLE

## 📖 কী?

DROP TABLE ব্যবহার করে নির্দিষ্ট table delete করা হয়।

## 🧪 Example

```sql id="drop_table"
DROP TABLE Students;
```

---

# 📌 COLUMN CONSTRAINTS

## 📖 কী?

Constraints হলো rules যা table-এর data নিয়ন্ত্রণ করে।

---

## 1️⃣ PRIMARY KEY

👉 Unique + Not Null

```sql id="pk_example"
StudentID INT PRIMARY KEY
```

---

## 2️⃣ NOT NULL

👉 Empty value allow করে না

```sql id="notnull_example"
Name VARCHAR(50) NOT NULL
```

---

## 3️⃣ UNIQUE

👉 Duplicate value allow করে না

```sql id="unique_example"
Email VARCHAR(100) UNIQUE
```

---

## 4️⃣ DEFAULT

👉 Default value set করে

```sql id="default_example"
Status VARCHAR(20) DEFAULT 'Active'
```

---

## 5️⃣ CHECK

👉 Condition enforce করে

```sql id="check_example"
Age INT CHECK (Age >= 18)
```

---

# 🔗 MULTIPLE CONSTRAINTS

একই column-এ একাধিক constraint ব্যবহার করা যায়।

## 🧪 Example

```sql id="multi_constraints"
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Age INT CHECK (Age >= 18),
    Status VARCHAR(20) DEFAULT 'Active'
);
```

👉 এখানে একাধিক constraint একসাথে ব্যবহার করা হয়েছে।

---

# 📥 INSERT DATA

## 📖 কী?

INSERT ব্যবহার করে table-এ data insert করা হয়।

---

# 1️⃣ INSERT BASIC

```sql id="insert_basic"
INSERT INTO Students (StudentID, Name, Age)
VALUES (101, 'Rahim', 22);
```

---

# 2️⃣ MULTIPLE ROW INSERT

```sql id="insert_multiple"
INSERT INTO Students (StudentID, Name, Age)
VALUES 
(102, 'Karim', 23),
(103, 'Jannat', 21);
```

---

# 3️⃣ INSERT WITHOUT COLUMN NAMES

## 📖 কী?

Column নাম না লিখে সরাসরি সব column-এর জন্য value দিতে হয়।

⚠️ Order অবশ্যই table structure অনুযায়ী হতে হবে।

---

## 🧪 Example

```sql id="insert_no_columns"
INSERT INTO Students
VALUES (104, 'Sadia', 20);
```

---

## ⚠️ Important Rules

* সব column-এর value দিতে হবে
* Column order ঠিক থাকতে হবে
* NOT NULL column miss করা যাবে না

---

# 📊 DIFFERENCE SUMMARY

| Operation       | কাজ                  |
| --------------- | -------------------- |
| CREATE DATABASE | নতুন database তৈরি   |
| CREATE TABLE    | নতুন table তৈরি      |
| DROP DATABASE   | পুরো database delete |
| DROP TABLE      | table delete         |
| INSERT          | data add করা         |

---

# 🧠 Interview Answer

### CREATE কী?

CREATE ব্যবহার করে database বা table তৈরি করা হয়।

### DROP কী?

DROP ব্যবহার করে database বা table permanently delete করা হয়।

### CONSTRAINTS কী?

Constraints হলো rules যা database-এর data integrity maintain করে।

### INSERT কী?

INSERT ব্যবহার করে table-এ নতুন data add করা হয়। Column name দিয়ে বা ছাড়াও data insert করা যায়।

---

# 🚀 Conclusion

SQL-এর এই basic operations (CREATE, DROP, INSERT, Constraints) database design এবং real-world application development-এর foundation তৈরি করে।

👉 এগুলো ভালোভাবে বুঝলে advanced SQL সহজ হয়ে যায়।
