const express = require("express");
const app = express();

// Define the root route
app.get("/", (req, res) => {
  res.send("server is running 5000");
});

// Set the port to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
