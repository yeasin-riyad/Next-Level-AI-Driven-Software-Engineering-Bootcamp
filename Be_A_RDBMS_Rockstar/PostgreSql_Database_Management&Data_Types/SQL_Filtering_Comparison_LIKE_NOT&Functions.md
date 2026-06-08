# 📚 SQL Filtering, Comparison, LIKE, NOT & Functions

## 🎯 ভূমিকা

SQL-এ data query করার সময় সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো **Filtering** এবং **Functions ব্যবহার করা**।

এই notes-এ আমরা শিখব:

* DISTINCT
* WHERE Filtering
* AND / OR Filtering
* IN vs AND Comparison
* LIKE vs ILIKE
* NOT Operator
* Scalar Functions
* Aggregate Functions

---

# 🔹 1️⃣ DISTINCT

## 📖 কী?

DISTINCT ব্যবহার করা হয় duplicate value remove করার জন্য।

---

## 🧪 Example

```sql id="distinct_example"
SELECT DISTINCT Department
FROM Students;
```

👉 একই department একবার দেখাবে

---

## 📊 Without DISTINCT

| Department |
| ---------- |
| CSE        |
| CSE        |
| EEE        |

---

## 📊 With DISTINCT

| Department |
| ---------- |
| CSE        |
| EEE        |

---

# 🔹 2️⃣ WHERE Filtering

## 📖 কী?

WHERE ব্যবহার করে condition অনুযায়ী data filter করা হয়।

---

## 🧪 Example

```sql id="where_example"
SELECT *
FROM Students
WHERE Age > 20;
```

👉 শুধু 20 বছরের বেশি students দেখাবে

---

# 🔹 3️⃣ AND Filtering

## 📖 কী?

AND ব্যবহার করলে সব condition true হতে হবে।

---

## 🧪 Example

```sql id="and_example"
SELECT *
FROM Students
WHERE Age > 20 AND Department = 'CSE';
```

👉 দুইটি condition একসাথে match করবে

---

# 🔹 4️⃣ OR Filtering

## 📖 কী?

OR ব্যবহার করলে যেকোনো একটি condition true হলেই হবে।

---

## 🧪 Example

```sql id="or_example"
SELECT *
FROM Students
WHERE Department = 'CSE' OR Department = 'EEE';
```

---

## 🧠 AND vs OR

| Operator | Meaning                   |
| -------- | ------------------------- |
| AND      | সব condition true হতে হবে |
| OR       | যেকোনো একটি true হলেই হবে |

---

# 🔹 5️⃣ IN vs AND

## 📖 IN কী?

IN ব্যবহার করে multiple OR condition সহজ করা যায়।

---

## 🧪 Example (OR version)

```sql id="or_in"
SELECT *
FROM Students
WHERE Department = 'CSE'
   OR Department = 'EEE'
   OR Department = 'BBA';
```

---

## 🧪 Example (IN version)

```sql id="in_example"
SELECT *
FROM Students
WHERE Department IN ('CSE', 'EEE', 'BBA');
```

---

## 🎯 Difference

| Method | Use Case              |
| ------ | --------------------- |
| OR     | Long manual condition |
| IN     | Clean & scalable      |

---

# 🔹 6️⃣ LIKE Operator

## 📖 কী?

LIKE ব্যবহার করা হয় pattern matching এর জন্য।

---

## 🧪 Example

```sql id="like_example"
SELECT *
FROM Students
WHERE Name LIKE 'R%';
```

👉 R দিয়ে শুরু নামগুলো দেখাবে

---

## 🔤 LIKE Wildcards

| Symbol | Meaning                  |
| ------ | ------------------------ |
| %      | Any number of characters |
| _      | Single character         |

---

## 🧪 Examples

```sql id="like_examples"
LIKE 'R%'   → R দিয়ে শুরু
LIKE '%im'  → im দিয়ে শেষ
LIKE '_a%'  → 2nd letter a
```

---

# 🔹 7️⃣ ILIKE (Case-Insensitive LIKE)

## 📖 কী?

ILIKE case insensitive search করে (PostgreSQL এ ব্যবহৃত)।

---

## 🧪 Example

```sql id="ilike_example"
SELECT *
FROM Students
WHERE Name ILIKE 'rahim';
```

👉 Rahim, RAHIM, rahim সব match করবে

---

# 🔹 8️⃣ NOT Operator

## 📖 কী?

NOT ব্যবহার করে condition reverse করা হয়।

---

## 🧪 Example

```sql id="not_example"
SELECT *
FROM Students
WHERE NOT Department = 'CSE';
```

👉 CSE ছাড়া সব দেখাবে

---

## 🧠 Alternative

```sql
WHERE Department <> 'CSE'
```

---

# 🔹 9️⃣ Scalar Functions

## 📖 কী?

Scalar functions প্রতিটি row-এর উপর কাজ করে এবং single value return করে।

---

## 🧪 Common Scalar Functions

### 🔡 UPPER / LOWER

```sql id="upper_lower"
SELECT UPPER(Name), LOWER(Name)
FROM Students;
```

---

### 🔢 LENGTH

```sql id="length_example"
SELECT LENGTH(Name)
FROM Students;
```

---

### 🔁 ROUND

```sql id="round_example"
SELECT ROUND(3.1416, 2);
```

---

### 📅 NOW()

```sql id="now_example"
SELECT NOW();
```

---

## 🎯 Scalar Functions Features

* Row-by-row কাজ করে
* Single value return করে
* SELECT এর সাথে ব্যবহার হয়

---

# 🔟 Aggregate Functions

## 📖 কী?

Aggregate functions অনেক row নিয়ে একটি result দেয়।

---

## 🧪 Common Aggregate Functions

### 📊 COUNT

```sql id="count_example"
SELECT COUNT(*)
FROM Students;
```

---

### 🔢 SUM

```sql id="sum_example"
SELECT SUM(Age)
FROM Students;
```

---

### 📈 AVG

```sql id="avg_example"
SELECT AVG(Age)
FROM Students;
```

---

### ⬆️ MAX

```sql id="max_example"
SELECT MAX(Age)
FROM Students;
```

---

### ⬇️ MIN

```sql id="min_example"
SELECT MIN(Age)
FROM Students;
```

---

## 📊 Scalar vs Aggregate

| Type      | কাজ                           |
| --------- | ----------------------------- |
| Scalar    | Row-by-row result             |
| Aggregate | Multiple rows → single result |

---

# 🎯 Interview Summary

## 🔹 DISTINCT

Duplicate value remove করে

## 🔹 WHERE

Condition-based filtering

## 🔹 AND / OR

Multiple condition filtering

## 🔹 IN

Multiple OR সহজভাবে লিখে

## 🔹 LIKE / ILIKE

Pattern matching (case-sensitive / insensitive)

## 🔹 NOT

Condition reverse করে

## 🔹 Scalar Functions

Each row-এর উপর কাজ করে

## 🔹 Aggregate Functions

Multiple rows → single result

---

# 🚀 Conclusion

SQL filtering এবং functions হলো real-world query writing-এর backbone।

👉 এগুলো master করলে:

* Complex query সহজ হবে
* Interview crack করা সহজ হবে
* Backend development powerful হবে
