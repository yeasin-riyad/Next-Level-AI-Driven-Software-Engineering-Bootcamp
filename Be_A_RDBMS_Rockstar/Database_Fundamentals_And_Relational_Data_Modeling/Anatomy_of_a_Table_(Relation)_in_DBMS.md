# 📚 DBMS-এ একটি Table (Relation)-এর গঠন

## 🎯 ভূমিকা

Relational Database Management System (RDBMS)-এ ডেটা **Table (Relation)** আকারে সংরক্ষণ করা হয়। Database Design এবং DBMS Interview-এর জন্য একটি Table-এর গঠন (Anatomy of a Table) বোঝা অত্যন্ত গুরুত্বপূর্ণ।

একটি Table মূলত **Rows (সারি)** এবং **Columns (কলাম)** নিয়ে গঠিত, যেখানে Structured Format-এ Data সংরক্ষণ করা হয়।

---

# 📊 উদাহরণ: Students Relation

| StudentID | Name   | Department | GPA  |
| --------- | ------ | ---------- | ---- |
| 1         | Rahim  | CSE        | 3.80 |
| 2         | Karim  | EEE        | 3.50 |
| 3         | Jannat | CSE        | 3.90 |

---

# 🏗 একটি Relation-এর প্রধান অংশসমূহ

একটি Relational Table-এর নিম্নলিখিত উপাদান থাকে:

1. Relation Name
2. Attribute (Column)
3. Tuple (Row)
4. Domain
5. Degree
6. Cardinality

---

# 1️⃣ Relation Name

Table-এর নামকে **Relation Name** বলা হয়।

### উদাহরণ

```text
Students
```

এখানে **Students** হলো Relation Name।

---

# 2️⃣ Attribute (Column)

Table-এর প্রতিটি Column-কে **Attribute** বলা হয়।

### উদাহরণ

| StudentID | Name | Department | GPA |

এখানে Attribute গুলো হলো:

* StudentID
* Name
* Department
* GPA

### গুরুত্বপূর্ণ বিষয়

> Attribute একটি Entity-এর বৈশিষ্ট্য (Property) বর্ণনা করে।

---

# 3️⃣ Tuple (Row)

Table-এর প্রতিটি Row-কে **Tuple** বলা হয়।

### উদাহরণ

| StudentID | Name  | Department | GPA  |
| --------- | ----- | ---------- | ---- |
| 1         | Rahim | CSE        | 3.80 |

উপরের সম্পূর্ণ Row-টি একটি Tuple।

### গুরুত্বপূর্ণ বিষয়

> Tuple একটি Record বা Data Entry নির্দেশ করে।

---

# 4️⃣ Domain

কোনো Attribute-এর জন্য অনুমোদিত (Valid) Value-এর সেটকে **Domain** বলা হয়।

### উদাহরণ

| Attribute  | Domain              |
| ---------- | ------------------- |
| StudentID  | Integer             |
| Name       | String              |
| Department | String              |
| GPA        | Float (0.00 - 4.00) |

### গুরুত্বপূর্ণ বিষয়

> Domain Data Integrity নিশ্চিত করে এবং Invalid Data প্রবেশ করা থেকে রক্ষা করে।

---

# 5️⃣ Degree

একটি Relation-এ মোট কতটি Column (Attribute) আছে তাকে **Degree** বলা হয়।

### উদাহরণ

| StudentID | Name | Department | GPA |

মোট Column = 4

```text
Degree = 4
```

### সূত্র

```text
Degree = Total Number of Columns
```

---

# 6️⃣ Cardinality

একটি Relation-এ মোট কতটি Row (Tuple) আছে তাকে **Cardinality** বলা হয়।

### উদাহরণ

| StudentID | Name   | Department | GPA  |
| --------- | ------ | ---------- | ---- |
| 1         | Rahim  | CSE        | 3.80 |
| 2         | Karim  | EEE        | 3.50 |
| 3         | Jannat | CSE        | 3.90 |

মোট Row = 3

```text
Cardinality = 3
```

### সূত্র

```text
Cardinality = Total Number of Rows
```

---

# 🎨 চিত্রের মাধ্যমে উপস্থাপন

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

Attributes (Columns)

Rows = Tuples

Degree = 4

Cardinality = 3
```

---

# 📋 সংক্ষিপ্ত সারাংশ

| উপাদান        | অর্থ               |
| ------------- | ------------------ |
| Relation Name | Table-এর নাম       |
| Attribute     | Column             |
| Tuple         | Row                |
| Domain        | Valid Value-এর সেট |
| Degree        | মোট Column সংখ্যা  |
| Cardinality   | মোট Row সংখ্যা     |

---

# 🎤 Interview Answer

### DBMS-এ একটি Table (Relation)-এর Anatomy কী?

DBMS-এ একটি Table বা Relation নিম্নলিখিত উপাদান নিয়ে গঠিত:

* Relation Name
* Attributes (Columns)
* Tuples (Rows)
* Domain
* Degree
* Cardinality

এই উপাদানগুলো মিলে একটি Relational Database-এর Data Structure নির্ধারণ করে।

---

# 🚀 উপসংহার

Table বা Relation-এর Anatomy হলো DBMS-এর একটি মৌলিক ধারণা। Relation Name, Attribute, Tuple, Domain, Degree এবং Cardinality সম্পর্কে পরিষ্কার ধারণা থাকলে Database Design, Normalization এবং Interview Questions সহজে বোঝা যায়।
