const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
const groupmembersRoute = require("./routes/groupmembers");
app.use("/api/groupmembers", groupmembersRoute);

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
