export default function Lab27Page() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Lab 27: Prisma ORM &amp; MongoDB CRUD API</h1>
      <p>
        This lab demonstrates connecting to a <strong>MongoDB</strong> database
        using <strong>Prisma ORM</strong> with full CRUD operations for{" "}
        <code>User</code> and <code>Task</code> entities.
      </p>

      <h2>📌 API Endpoints</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Method</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Endpoint</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>POST</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/users</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Create a new user</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/users</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fetch all users</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/users/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fetch user by UserID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>PUT</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/users/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Update user by UserID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>DELETE</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/users/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Delete user by UserID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>POST</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Create a new task</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fetch all tasks</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fetch task by TaskID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>PUT</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Update task by TaskID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>DELETE</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks/[id]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Delete task by TaskID</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks/search?query=...</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Search tasks by title or description</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>GET</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>/Lab27/api/tasks/user/[userId]</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Fetch all tasks for a specific user</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "2rem" }}>🧪 Test with Postman / Thunder Client</h2>
      <p>Use the endpoints above with base URL: <code>http://localhost:3000</code></p>
    </div>
  );
}
