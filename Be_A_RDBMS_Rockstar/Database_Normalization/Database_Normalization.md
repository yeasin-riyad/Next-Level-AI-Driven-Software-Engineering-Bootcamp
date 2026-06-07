# 📚 Database Normalization (1NF, 2NF, 3NF)

## 🎯 ভূমিকা

**Normalization** হলো Database Design-এর একটি গুরুত্বপূর্ণ Technique, যার মাধ্যমে Database-কে এমনভাবে Organize করা হয় যাতে:

* Data Redundancy কমে
* Insert, Update এবং Delete Anomaly দূর হয়
* Data Integrity বৃদ্ধি পায়
* Database আরও Efficient এবং Scalable হয়

### সহজ ভাষায়

> Normalization হলো একটি বড় এবং অগোছালো Table-কে ছোট, Logical এবং Well-Structured Table-এ ভাগ করার প্রক্রিয়া।

---

# 📊 উদাহরণ (Unnormalized Table)

| StudentID | StudentName | Courses   |
| --------- | ----------- | --------- |
| 101       | Rahim       | DBMS, OOP |
| 102       | Karim       | DBMS      |
| 103       | Jannat      | OOP, DSA  |

---

## ❌ সমস্যা

* একটি Column-এ একাধিক Value রয়েছে
* Query করা কঠিন
* Data Maintain করা কঠিন
* Data Redundancy তৈরি হয়

---

# 1️⃣ First Normal Form (1NF)

## 📖 1NF কী?

একটি Table তখনই **1NF (First Normal Form)**-এ থাকবে যদি:

* প্রতিটি Column-এ Atomic (Single) Value থাকে
* কোনো Repeating Group না থাকে
* প্রতিটি Record Unique হয়

---

## ❌ 1NF-এর আগে

| StudentID | StudentName | Courses   |
| --------- | ----------- | --------- |
| 101       | Rahim       | DBMS, OOP |

---

## ✅ 1NF-এর পরে

| StudentID | StudentName | Course |
| --------- | ----------- | ------ |
| 101       | Rahim       | DBMS   |
| 101       | Rahim       | OOP    |

---

## 🎯 মূল নিয়ম

```text
একটি Cell-এ একাধিক Value রাখা যাবে না
```

---

## 🧠 মনে রাখার ট্রিক

```text
1NF
=
Atomic Values
```

---

# 2️⃣ Second Normal Form (2NF)

## 📖 2NF কী?

একটি Table তখনই **2NF (Second Normal Form)**-এ থাকবে যদি:

* Table ইতোমধ্যে 1NF-এ থাকে
* কোনো Partial Dependency না থাকে
* সব Non-Key Attribute সম্পূর্ণ Primary Key-এর উপর নির্ভরশীল হয়

---

## ❌ সমস্যা (Partial Dependency)

### Enrollment Table

| StudentID | CourseID | StudentName | CourseName |
| --------- | -------- | ----------- | ---------- |
| 101       | C1       | Rahim       | DBMS       |
| 101       | C2       | Rahim       | OOP        |

---

### সমস্যা কোথায়?

```text
StudentName → শুধুমাত্র StudentID-এর উপর নির্ভরশীল

CourseName → শুধুমাত্র CourseID-এর উপর নির্ভরশীল
```

কিন্তু Primary Key হলো:

```text
(StudentID, CourseID)
```

এটিই Partial Dependency।

---

## ✅ 2NF-এর পরে

### Students Table

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Rahim       |

---

### Courses Table

| CourseID | CourseName |
| -------- | ---------- |
| C1       | DBMS       |
| C2       | OOP        |

---

### Enrollments Table

| StudentID | CourseID |
| --------- | -------- |
| 101       | C1       |
| 101       | C2       |

---

## 🎯 মূল নিয়ম

```text
Composite Key-এর আংশিক নির্ভরতা দূর করতে হবে
```

---

## 🧠 মনে রাখার ট্রিক

```text
2NF
=
Full Dependency
```

---

# 3️⃣ Third Normal Form (3NF)

## 📖 3NF কী?

একটি Table তখনই **3NF (Third Normal Form)**-এ থাকবে যদি:

* Table ইতোমধ্যে 2NF-এ থাকে
* কোনো Transitive Dependency না থাকে

---

## ❌ সমস্যা (Transitive Dependency)

| StudentID | StudentName | DeptID | DeptName |
| --------- | ----------- | ------ | -------- |
| 101       | Rahim       | D1     | CSE      |
| 102       | Karim       | D2     | EEE      |

---

### সমস্যা কোথায়?

```text
StudentID
    ↓
DeptID
    ↓
DeptName
```

এখানে:

```text
DeptName সরাসরি StudentID-এর উপর নির্ভরশীল নয়
```

বরং:

```text
DeptName → DeptID-এর উপর নির্ভরশীল
```

এটিই Transitive Dependency।

---

## ✅ 3NF-এর পরে

### Students Table

| StudentID | StudentName | DeptID |
| --------- | ----------- | ------ |
| 101       | Rahim       | D1     |
| 102       | Karim       | D2     |

---

### Departments Table

| DeptID | DeptName |
| ------ | -------- |
| D1     | CSE      |
| D2     | EEE      |

---

## 🎯 মূল নিয়ম

```text
Indirect Dependency দূর করতে হবে
```

---

## 🧠 মনে রাখার ট্রিক

```text
3NF
=
No Transitive Dependency
```

---

# 📊 Normalization Summary

| Normal Form | নিয়ম                    | লক্ষ্য                      |
| ----------- | ------------------------ | --------------------------- |
| 1NF         | Atomic Values            | Repeating Group দূর করা     |
| 2NF         | No Partial Dependency    | Full Dependency নিশ্চিত করা |
| 3NF         | No Transitive Dependency | Indirect Dependency দূর করা |

---

# 🔄 Normalization Flow

```text
Unnormalized Table
        ↓
       1NF
(Atomic Values)

        ↓
       2NF
(Remove Partial Dependency)

        ↓
       3NF
(Remove Transitive Dependency)
```

---

# 🎯 Normalization কেন গুরুত্বপূর্ণ?

Normalization:

✅ Data Redundancy কমায়

✅ Insert Anomaly দূর করে

✅ Update Anomaly দূর করে

✅ Delete Anomaly দূর করে

✅ Data Consistency বৃদ্ধি করে

✅ Data Integrity নিশ্চিত করে

---

# 🎤 Interview Answer

### Normalization কী?

Normalization হলো Database Design-এর একটি Technique, যার মাধ্যমে Data Redundancy কমানো এবং Data Integrity বৃদ্ধি করা হয়।

Normalization-এর প্রধান ধাপগুলো হলো:

### 1NF

* Atomic Values নিশ্চিত করে
* Repeating Group দূর করে

### 2NF

* Partial Dependency দূর করে

### 3NF

* Transitive Dependency দূর করে

এই তিনটি Normal Form Database-কে আরও Efficient, Consistent এবং Scalable করে তোলে।

---

# 🧠 Quick Memory Trick

```text
1NF → Atomic Values

2NF → Full Dependency

3NF → No Indirect Dependency
```

---

# 🚀 উপসংহার

Normalization হলো Relational Database Design-এর অন্যতম গুরুত্বপূর্ণ ধারণা।

সঠিকভাবে Normalization প্রয়োগ করলে:

```text
কম Redundancy
       +
উচ্চ Data Integrity
       +
কোনো Anomaly নেই
       =
ভালো Database Design
```

তাই Database Design, SQL Interview এবং System Design Interview-এর জন্য 1NF, 2NF এবং 3NF সম্পর্কে পরিষ্কার ধারণা থাকা অত্যন্ত গুরুত্বপূর্ণ।
