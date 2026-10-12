const http = require("http");

const BASE_URL = "http://localhost:3000";

async function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        let json;
        try {
          json = JSON.parse(data);
        } catch (e) {
          json = data;
        }
        resolve({ status: res.statusCode, body: json });
      });
    });

    req.on("error", (err) => reject(err));

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log("==================================================");
  console.log("STARTING ALL 19 API TEST CASES FOR LAB 27");
  console.log("==================================================\n");

  let results = [];

  function record(id, name, status, details = "") {
    const isPass = status === "PASS";
    console.log(`[${isPass ? "PASS" : "FAIL"}] ${id}. ${name} ${details ? `(${details})` : ""}`);
    results.push({ id, name, status, details });
  }

  try {
    // User Tests
    // 1. POST /api/users (Create User)
    const t1 = await request("POST", "/api/users", {
      UserID: "U003",
      UserName: "Bob",
      Password: "999",
    });
    record(1, "POST /api/users", t1.status === 201 && t1.body.success ? "PASS" : "FAIL", `Status: ${t1.status}`);

    // 2. GET /api/users (Get all users)
    const t2 = await request("GET", "/api/users");
    record(2, "GET /api/users", t2.status === 200 && Array.isArray(t2.body.data) ? "PASS" : "FAIL", `Found ${t2.body.data?.length} users`);

    // 3. GET /api/users/[id] (Get User by ID)
    const t3 = await request("GET", "/api/users/U001");
    record(3, "GET /api/users/U001", t3.status === 200 && t3.body.data?.UserID === "U001" ? "PASS" : "FAIL");

    // 4. PUT /api/users/[id] (Update User)
    const t4 = await request("PUT", "/api/users/U003", { UserName: "Robert" });
    record(4, "PUT /api/users/U003", t4.status === 200 && t4.body.data?.UserName === "Robert" ? "PASS" : "FAIL");

    // 5. DELETE /api/users/[id] (Delete User)
    const t5 = await request("DELETE", "/api/users/U003");
    record(5, "DELETE /api/users/U003", t5.status === 200 && t5.body.success ? "PASS" : "FAIL");

    // Task Tests
    // 6. POST /api/tasks (Create Task)
    const t6 = await request("POST", "/api/tasks", {
      TaskID: "T004",
      TaskTitle: "Testing API",
      TaskDescription: "Automated integration testing",
      IsCompleted: false,
      UserID: "U001",
    });
    record(6, "POST /api/tasks", t6.status === 201 && t6.body.success ? "PASS" : "FAIL");

    // 7. GET /api/tasks (Get all Tasks)
    const t7 = await request("GET", "/api/tasks");
    record(7, "GET /api/tasks", t7.status === 200 && Array.isArray(t7.body.data) ? "PASS" : "FAIL", `Count: ${t7.body.data?.length}`);

    // 8. GET /api/tasks/[id] (Get Task by ID)
    const t8 = await request("GET", "/api/tasks/T001");
    record(8, "GET /api/tasks/T001", t8.status === 200 && t8.body.data?.TaskID === "T001" ? "PASS" : "FAIL");

    // 9. PUT /api/tasks/[id] (Update Task)
    const t9 = await request("PUT", "/api/tasks/T004", {
      TaskTitle: "Updated Testing API",
      IsCompleted: true,
    });
    record(9, "PUT /api/tasks/T004", t9.status === 200 && t9.body.data?.IsCompleted === true ? "PASS" : "FAIL");

    // 10. DELETE /api/tasks/[id] (Delete Task)
    const t10 = await request("DELETE", "/api/tasks/T004");
    record(10, "DELETE /api/tasks/T004", t10.status === 200 && t10.body.success ? "PASS" : "FAIL");

    // Required Lab Operations
    // 11. GET /api/tasks/search?query=Prisma
    const t11 = await request("GET", "/api/tasks/search?query=Prisma");
    record(11, "GET /api/tasks/search?query=Prisma", t11.status === 200 && t11.body.data?.length > 0 ? "PASS" : "FAIL", `Found: ${t11.body.data?.length}`);

    // 12. GET /api/tasks/user/U001
    const t12 = await request("GET", "/api/tasks/user/U001");
    record(12, "GET /api/tasks/user/U001", t12.status === 200 && Array.isArray(t12.body.data) ? "PASS" : "FAIL", `Found: ${t12.body.data?.length}`);

    // Edge & Error Cases
    // 13. Invalid task ID (e.g. malformed or invalid structure)
    const t13 = await request("GET", "/api/tasks/NON_EXISTENT_ID");
    record(13, "GET /api/tasks/NON_EXISTENT_ID", t13.status === 404 && !t13.body.success ? "PASS" : "FAIL");

    // 14. Nonexistent task delete/update
    const t14 = await request("DELETE", "/api/tasks/T999");
    record(14, "DELETE /api/tasks/T999", t14.status === 404 && !t14.body.success ? "PASS" : "FAIL");

    // 15. Duplicate TaskID
    const t15 = await request("POST", "/api/tasks", {
      TaskID: "T001",
      TaskTitle: "Duplicate Test",
      TaskDescription: "Desc",
      IsCompleted: false,
      UserID: "U001",
    });
    record(15, "POST /api/tasks (Duplicate TaskID)", t15.status === 409 && !t15.body.success ? "PASS" : "FAIL");

    // 16. Missing required field
    const t16 = await request("POST", "/api/tasks", {
      TaskID: "T005",
      TaskTitle: "Incomplete Task",
    });
    record(16, "POST /api/tasks (Missing fields)", t16.status === 400 && !t16.body.success ? "PASS" : "FAIL");

    // 17. Search with no results
    const t17 = await request("GET", "/api/tasks/search?query=NonExistentQueryXYZ");
    record(17, "GET /api/tasks/search (No results)", t17.status === 200 && t17.body.success && t17.body.data?.length === 0 ? "PASS" : "FAIL");

    // 18. User with no tasks (create user U004 without tasks)
    await request("POST", "/api/users", { UserID: "U004", UserName: "NoTasksUser", Password: "pwd" });
    const t18 = await request("GET", "/api/tasks/user/U004");
    record(18, "GET /api/tasks/user/U004 (User with no tasks)", t18.status === 200 && t18.body.data?.length === 0 ? "PASS" : "FAIL");
    await request("DELETE", "/api/users/U004");

    // 19. Nonexistent UserID query
    const t19 = await request("GET", "/api/tasks/user/U999");
    record(19, "GET /api/tasks/user/U999 (Nonexistent UserID)", t19.status === 404 && !t19.body.success ? "PASS" : "FAIL");

  } catch (err) {
    console.error("Test execution error:", err);
  }

  console.log("\n==================================================");
  console.log(`TEST SUMMARY: ${results.filter((r) => r.status === "PASS").length}/${results.length} PASSED`);
  console.log("==================================================");
}

runTests();
