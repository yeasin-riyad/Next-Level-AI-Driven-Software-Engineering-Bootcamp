# 📚 SQL: NULL Handling, LIMIT/OFFSET, UPDATE, DELETE, GROUP BY & HAVING

## 🎯 ভূমিকা

SQL-এ data manage করার জন্য কিছু খুব গুরুত্বপূর্ণ concepts আছে:

* NULL Handling (COALESCE)
* LIMIT & OFFSET (Pagination)
* UPDATE Data
* DELETE Data
* GROUP BY (Aggregation)
* HAVING (Filtered Grouping)

এইগুলো real-world backend development এবং interviews-এ খুব বেশি ব্যবহার হয়।

---

# 🔹 1️⃣ NULL Handling with COALESCE

## 📖 NULL কী?

NULL মানে হলো:

> কোনো value নেই / unknown / missing data

---

## ❌ Problem with NULL

```sql
SELECT Age + 5
FROM Students;
```

👉 যদি Age NULL হয়, result NULL হবে

---

## ✅ COALESCE কী?

COALESCE NULL value কে replace করে প্রথম non-null value return করে।

---

## 🧪 Syntax

```sql id="coalesce_basic"
COALESCE(value1, value2, value3, ...)
```

---

## 🧪 Example

```sql id="coalesce_example"
SELECT Name, COALESCE(Age, 18) AS Age
FROM Students;
```

👉 Age NULL হলে 18 দেখাবে

---

## 🎯 Real Use Case

* Default age
* Default salary
* Missing email handling

---

# 🔹 2️⃣ LIMIT & OFFSET (Pagination)

## 📖 কী?

LIMIT এবং OFFSET ব্যবহার করা হয় data pagination করার জন্য।

---

## 🔹 LIMIT

👉 কতগুলো row দেখাবে

```sql id="limit_example"
SELECT * FROM Students
LIMIT 5;
```

👉 শুধু 5টা row দেখাবে

---

## 🔹 OFFSET

👉 কতগুলো row skip করবে

```sql id="offset_example"
SELECT * FROM Students
OFFSET 5;
```

👉 প্রথম 5 row skip করবে

---

## 📊 LIMIT + OFFSET (Pagination)

```sql id="pagination_example"
SELECT * FROM Students
LIMIT 5 OFFSET 10;
```

👉 11–15 নম্বর row দেখাবে

---

## 🎯 Real World Example

| Page   | Query              |
| ------ | ------------------ |
| Page 1 | LIMIT 10 OFFSET 0  |
| Page 2 | LIMIT 10 OFFSET 10 |
| Page 3 | LIMIT 10 OFFSET 20 |

---

# 🔹 3️⃣ UPDATE DATA

## 📖 কী?

UPDATE ব্যবহার করে existing data modify করা হয়।

---

## 🧪 Syntax

```sql id="update_basic"
UPDATE table_name
SET column = value
WHERE condition;
```

---

## 🧪 Example

```sql id="update_example"
UPDATE Students
SET Age = 25
WHERE StudentID = 101;
```

👉 নির্দিষ্ট student-এর age update হবে

---

## ⚠️ Warning

```sql
UPDATE Students
SET Age = 25;
```

👉 সব row update হয়ে যাবে (danger ❌)

---

# 🔹 4️⃣ DELETE DATA

## 📖 কী?

DELETE ব্যবহার করে data remove করা হয়।

---

## 🧪 Syntax

```sql id="delete_basic"
DELETE FROM table_name
WHERE condition;
```

---

## 🧪 Example

```sql id="delete_example"
DELETE FROM Students
WHERE StudentID = 101;
```

---

## ⚠️ Danger Query

```sql
DELETE FROM Students;
```

👉 পুরো table empty হয়ে যাবে

---

# 🔹 5️⃣ GROUP BY

## 📖 কী?

GROUP BY ব্যবহার করে একই value-এর data group করা হয়।

---

## 🧪 Example

```sql id="group_by_example"
SELECT Department, COUNT(*)
FROM Students
GROUP BY Department;
```

---

## 📊 Output Idea

| Department | Count |
| ---------- | ----- |
| CSE        | 10    |
| EEE        | 5     |

---

## 🎯 Use Case

* Department-wise student count
* Product category sales
* City-wise users

---

# 🔹 6️⃣ GROUP BY with Aggregate Functions

## Common Aggregates

* COUNT()
* SUM()
* AVG()
* MAX()
* MIN()

---

## 🧪 Example

```sql id="group_by_sum"
SELECT Department, AVG(Age)
FROM Students
GROUP BY Department;
```

👉 প্রতিটি department-এর average age

---

# 🔹 7️⃣ HAVING (Filtered GROUP BY)

## 📖 কী?

HAVING ব্যবহার করা হয় GROUP BY এর পরে condition দিতে।

---

## ❌ WHERE vs HAVING

| WHERE           | HAVING         |
| --------------- | -------------- |
| Row filter      | Group filter   |
| Before grouping | After grouping |

---

## 🧪 Example

```sql id="having_example"
SELECT Department, COUNT(*) AS TotalStudents
FROM Students
GROUP BY Department
HAVING COUNT(*) > 5;
```

👉 যেসব department-এ 5+ student আছে শুধু দেখাবে

---

# 🔥 WHERE vs HAVING Example

## WHERE (before group)

```sql
SELECT * FROM Students
WHERE Age > 20;
```

---

## HAVING (after group)

```sql
SELECT Department, COUNT(*)
FROM Students
GROUP BY Department
HAVING COUNT(*) > 2;
```

---

# 📊 FULL FLOW (GROUP BY LOGIC)

```text id="group_flow"
Table Data
   ↓
WHERE (Row Filtering)
   ↓
GROUP BY (Grouping)
   ↓
HAVING (Group Filtering)
   ↓
SELECT Result
```

---

# 🧠 Interview Summary

## 🔹 COALESCE

NULL value replace করে default value দেয়

## 🔹 LIMIT / OFFSET

Pagination implement করে

## 🔹 UPDATE

Existing data modify করে

## 🔹 DELETE

Data remove করে

## 🔹 GROUP BY

Same values group করে aggregation করে

## 🔹 HAVING

Grouped data filter করে

---

# 🚀 Conclusion

এই SQL concepts গুলো backend development এবং system design-এর core foundation:

* NULL handling → data safety
* pagination → scalability
* update/delete → data management
* group by/having → analytics

👉 এগুলো master করলে real-world database systems confidently handle করা যাবে।
