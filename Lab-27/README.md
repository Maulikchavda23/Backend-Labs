# Lab 27: Connect with Database Using Prisma ORM & MongoDB

A clean, full-stack API application built with **Next.js (App Router)**, **Prisma ORM**, and **MongoDB**. Provides complete CRUD operations for `User` and `Task` entities, task search, user task retrieval, and error handling.

---

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **ORM**: Prisma ORM v6
- **Database**: MongoDB (`prisma_lab27`)
- **Runtime**: Node.js

---

## 📁 Project Structure

```
Lab-27/
│
├── app/
│   └── api/
│       ├── users/
│       │   ├── route.ts          # POST (create), GET (get all)
│       │   └── [id]/
│       │       └── route.ts      # GET by ID, PUT (update), DELETE
│       │
│       └── tasks/
│           ├── route.ts          # POST (create), GET (get all)
│           ├── [id]/
│           │   └── route.ts      # GET by ID, PUT (update), DELETE
│           ├── search/
│           │   └── route.ts      # GET search by query
│           └── user/
│               └── [userId]/
│                   └── route.ts  # GET tasks by UserID
│
├── lib/
│   └── prisma.ts                 # Singleton PrismaClient instance
│
├── prisma/
│   ├── schema.prisma             # MongoDB Prisma models (User & Task)
│   └── seed.ts                   # Sample data seeder
│
├── .env                          # Environment configuration
├── package.json                  # Dependencies and scripts
├── test-runner.js                # Automated test runner for 19 test scenarios
└── README.md                     # Project documentation
```

---

## 🛢️ Database Schema (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  UserID   String
  UserName String
  Password String
}

model Task {
  id              String  @id @default(auto()) @map("_id") @db.ObjectId
  TaskID          String
  TaskTitle       String
  TaskDescription String
  IsCompleted     Boolean @default(false)
  UserID          String
}
```

---

## 🚀 Environment Setup & Installation

### 1. MongoDB Configuration
Ensure MongoDB is running locally on port `27017`. Set up `.env`:
```env
DATABASE_URL="mongodb://127.0.0.1:27017/prisma_lab27"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Generate Prisma Client & Push Schema
```bash
npx prisma generate
npx prisma db push
```

### 4. Seed Database
Populate initial users (`U001`, `U002`) and tasks (`T001`, `T002`, `T003`):
```bash
npm run seed
```

### 5. Start Development Server
```bash
npm run dev
```
Server runs at `http://localhost:3000`.

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/api/users` | Create a new user |
| `GET` | `/api/users` | Fetch all users |
| `GET` | `/api/users/[id]` | Fetch a single user by `UserID` (e.g. `U001`) |
| `PUT` | `/api/users/[id]` | Update user by `UserID` |
| `DELETE` | `/api/users/[id]` | Delete user by `UserID` |
| `POST` | `/api/tasks` | Create a new task |
| `GET` | `/api/tasks` | Fetch all tasks |
| `GET` | `/api/tasks/[id]` | Fetch task by `TaskID` (e.g. `T001`) |
| `PUT` | `/api/tasks/[id]` | Update task by `TaskID` |
| `DELETE` | `/api/tasks/[id]` | Delete task by `TaskID` |
| `GET` | `/api/tasks/search?query=Prisma` | Search tasks by `TaskTitle` or `TaskDescription` |
| `GET` | `/api/tasks/user/[userId]` | Fetch all tasks belonging to specific `UserID` (e.g. `U001`) |

---

## 📝 Example Requests & Responses

### 1. Create User
**POST** `/api/users`
```json
{
  "UserID": "U001",
  "UserName": "John",
  "Password": "1234"
}
```
**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "id": "6ab3f9a109966c990adb41d4",
    "UserID": "U001",
    "UserName": "John",
    "Password": "1234"
  }
}
```

### 2. Create Task
**POST** `/api/tasks`
```json
{
  "TaskID": "T001",
  "TaskTitle": "Learn Prisma",
  "TaskDescription": "Learn Prisma ORM with MongoDB",
  "IsCompleted": false,
  "UserID": "U001"
}
```
**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "id": "6ab3f9a109966c990adb41d5",
    "TaskID": "T001",
    "TaskTitle": "Learn Prisma",
    "TaskDescription": "Learn Prisma ORM with MongoDB",
    "IsCompleted": false,
    "UserID": "U001"
  }
}
```

### 3. Search Tasks
**GET** `/api/tasks/search?query=Prisma`  
**Response (200 OK)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "6ab3f9a109966c990adb41d5",
      "TaskID": "T001",
      "TaskTitle": "Learn Prisma",
      "TaskDescription": "Learn Prisma ORM with MongoDB",
      "IsCompleted": false,
      "UserID": "U001"
    }
  ]
}
```

### 4. Get Tasks by UserID
**GET** `/api/tasks/user/U001`  
**Response (200 OK)**:
```json
{
  "success": true,
  "data": [
    {
      "TaskID": "T001",
      "TaskTitle": "Learn Prisma",
      "TaskDescription": "Learn Prisma ORM with MongoDB",
      "IsCompleted": false,
      "UserID": "U001"
    },
    {
      "TaskID": "T002",
      "TaskTitle": "Learn MongoDB",
      "TaskDescription": "Practice MongoDB database operations",
      "IsCompleted": true,
      "UserID": "U001"
    }
  ]
}
```

---

## 🔍 Prisma Methods Demonstrated

- **`findMany()`**: Fetch all users (`/api/users`), all tasks (`/api/tasks`), task search filtering (`/api/tasks/search`), and tasks by user ID (`/api/tasks/user/[userId]`).
- **`findFirst()`**: Locate single user or task by custom string identifiers (`UserID`, `TaskID`).
- **`create()`**: Insert new user and task documents into MongoDB collections.
- **`update()`**: Update existing user and task documents.
- **`delete()`**: Remove user and task documents.
- **`$runCommandRaw()`**: Run direct MongoDB collection commands for environment-agnostic fallback support.

---

## 🧪 Testing the APIs

Run the automated 19-scenario integration test suite:
```bash
node test-runner.js
```

### Automated Test Output:
```
==================================================
STARTING ALL 19 API TEST CASES FOR LAB 27
==================================================

[PASS] 1. POST /api/users
[PASS] 2. GET /api/users
[PASS] 3. GET /api/users/U001
[PASS] 4. PUT /api/users/U003
[PASS] 5. DELETE /api/users/U003
[PASS] 6. POST /api/tasks
[PASS] 7. GET /api/tasks
[PASS] 8. GET /api/tasks/T001
[PASS] 9. PUT /api/tasks/T004
[PASS] 10. DELETE /api/tasks/T004
[PASS] 11. GET /api/tasks/search?query=Prisma
[PASS] 12. GET /api/tasks/user/U001
[PASS] 13. GET /api/tasks/NON_EXISTENT_ID
[PASS] 14. DELETE /api/tasks/T999
[PASS] 15. POST /api/tasks (Duplicate TaskID)
[PASS] 16. POST /api/tasks (Missing fields)
[PASS] 17. GET /api/tasks/search (No results)
[PASS] 18. GET /api/tasks/user/U004 (User with no tasks)
[PASS] 19. GET /api/tasks/user/U999 (Nonexistent UserID)

==================================================
TEST SUMMARY: 19/19 PASSED
==================================================
```
