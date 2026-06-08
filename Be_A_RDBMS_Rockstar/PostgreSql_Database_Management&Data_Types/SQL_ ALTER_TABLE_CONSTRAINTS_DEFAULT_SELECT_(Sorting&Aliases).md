# 📚 SQL: ALTER TABLE, CONSTRAINTS, DEFAULT, SELECT (Sorting & Aliases)

## 🎯 ভূমিকা

SQL-এ table structure পরিবর্তন, constraints আপডেট করা এবং data query করার জন্য কিছু গুরুত্বপূর্ণ concept আছে:

* ALTER TABLE
* Constraints Management
* DEFAULT Values Update
* SELECT Basics
* Sorting (ORDER BY)
* Aliases (AS)

---

# 🏗️ ALTER TABLE

## 📖 কী?

ALTER TABLE ব্যবহার করে existing table-এর structure পরিবর্তন করা হয়।

👉 যেমন:

* নতুন column যোগ করা
* column delete করা
* column modify করা
* constraints যোগ/মুছে ফেলা

---

## ➕ ADD COLUMN

```sql id="alter_add"
ALTER TABLE Students
ADD Gender VARCHAR(10);
```

👉 নতুন column যোগ হবে

---

## ❌ DROP COLUMN

```sql id="alter_drop"
ALTER TABLE Students
DROP COLUMN Gender;
```

👉 column delete হবে

---

## 🔄 MODIFY COLUMN

```sql id="alter_modify"
ALTER TABLE Students
MODIFY Name VARCHAR(100);
```

👉 column type বা size পরিবর্তন

---

# 🔐 ALTER CONSTRAINTS

## 📖 কী?

Existing table-এ নতুন constraint add বা remove করা যায়।

---

## ➕ ADD PRIMARY KEY

```sql id="add_pk"
ALTER TABLE Students
ADD PRIMARY KEY (StudentID);
```

---

## ➕ ADD UNIQUE

```sql id="add_unique"
ALTER TABLE Students
ADD CONSTRAINT unique_email UNIQUE (Email);
```

---

## ❌ DROP CONSTRAINT

```sql id="drop_constraint"
ALTER TABLE Students
DROP CONSTRAINT unique_email;
```

---

# ⚙️ DEFAULT VALUE UPDATE

## 📖 কী?

DEFAULT value সেট করলে নতুন row insert করার সময় value না দিলেও auto value বসে যায়।

---

## ➕ ADD DEFAULT

```sql id="add_default"
ALTER TABLE Students
ALTER Age SET DEFAULT 18;
```

---

## ❌ DROP DEFAULT

```sql id="drop_default"
ALTER TABLE Students
ALTER Age DROP DEFAULT;
```

---

## 🧪 Example

```sql id="default_insert"
INSERT INTO Students (StudentID, Name)
VALUES (101, 'Rahim');
```

👉 Age না দিলেও default 18 বসবে

---

# 📊 COLUMN CONSTRAINTS RECAP

| Constraint  | কাজ                     |
| ----------- | ----------------------- |
| PRIMARY KEY | Unique row identify     |
| NOT NULL    | Empty value allowed না  |
| UNIQUE      | Duplicate value নিষিদ্ধ |
| CHECK       | Condition enforce করে   |
| DEFAULT     | Default value সেট করে   |

---

# 📌 SELECT BASICS

## 📖 কী?

SELECT ব্যবহার করে database থেকে data retrieve করা হয়।

---

## 🧪 Basic SELECT

```sql id="select_all"
SELECT * FROM Students;
```

👉 সব data দেখাবে

---

## 🧪 Specific Columns

```sql id="select_columns"
SELECT Name, Age FROM Students;
```

👉 শুধু Name এবং Age দেখাবে

---

# 📊 SORTING (ORDER BY)

## 📖 কী?

ORDER BY ব্যবহার করে data sort করা হয়।

---

## 🔼 ASCENDING ORDER

```sql id="order_asc"
SELECT * FROM Students
ORDER BY Age ASC;
```

👉 ছোট থেকে বড়

---

## 🔽 DESCENDING ORDER

```sql id="order_desc"
SELECT * FROM Students
ORDER BY Age DESC;
```

👉 বড় থেকে ছোট

---

## 🧪 Example Output Logic

| Name   | Age |
| ------ | --- |
| Rahim  | 20  |
| Karim  | 25  |
| Jannat | 30  |

---

# 🏷️ ALIASES (AS)

## 📖 কী?

Alias ব্যবহার করে column বা table-এর temporary নাম দেওয়া হয়।

---

## 🧪 COLUMN ALIAS

```sql id="alias_column"
SELECT Name AS StudentName, Age AS StudentAge
FROM Students;
```

👉 output-friendly নাম দেখাবে

---

## 🧪 TABLE ALIAS

```sql id="alias_table"
SELECT s.Name, s.Age
FROM Students AS s;
```

👉 table ছোট নাম দিয়ে ব্যবহার করা হয়

---

# 🎯 কেন Alias ব্যবহার করা হয়?

* Readability বাড়াতে
* Complex query সহজ করতে
* Join queries simplify করতে

---

# 📊 FULL EXAMPLE

```sql id="full_example"
SELECT Name AS StudentName, Age AS StudentAge
FROM Students
ORDER BY Age DESC;
```

---

# 🧠 INTERVIEW ANSWER

## ALTER TABLE কী?

ALTER TABLE ব্যবহার করে existing table-এর structure পরিবর্তন করা হয়, যেমন column add, drop, modify করা।

---

## DEFAULT কী?

DEFAULT constraint ব্যবহার করে কোনো column-এর default value set করা হয়, যা insert করার সময় value না দিলেও automatically বসে যায়।

---

## SELECT কী?

SELECT ব্যবহার করে database থেকে data retrieve করা হয়।

---

## ORDER BY কী?

ORDER BY ব্যবহার করে data ascending বা descending order-এ sort করা হয়।

---

## ALIAS কী?

Alias হলো temporary নাম যা column বা table-এর জন্য ব্যবহার করা হয় query-কে আরও readable করার জন্য।

---

# 🚀 CONCLUSION

এই concepts গুলো SQL-এর core foundation:

* ALTER TABLE → structure change
* CONSTRAINTS → rules enforce
* DEFAULT → auto value
* SELECT → data retrieve
* ORDER BY → sorting
* ALIAS → readability improve

👉 এগুলো ভালোভাবে বুঝলে advanced SQL এবং interview প্রশ্ন সহজ হয়ে যাবে।
