const express = require("express");
const app = express();


const users = [
  { name: "John Doe", email: "john.doe@example.com", phone: "1234567890", age: 25 },
  { name: "Jane Smith", email: "jane.smith@example.com", phone: "0987654321", age: 30 },
  { name: "Alice Brown", email: "alice.brown@example.com", phone: "1112223333", age: 27 },
  { name: "Bob Johnson", email: "bob.johnson@example.com", phone: "4445556666", age: 35 },
  { name: "Charlie Lee", email: "charlie.lee@example.com", phone: "7778889999", age: 29 },
  { name: "Diana Ross", email: "diana.ross@example.com", phone: "1012023030", age: 40 },
  { name: "Edward King", email: "edward.king@example.com", phone: "4045056060", age: 22 },
  { name: "Fiona White", email: "fiona.white@example.com", phone: "7078089090", age: 33 },
  { name: "George Harris", email: "george.harris@example.com", phone: "3034045050", age: 26 },
  { name: "Helen Clark", email: "helen.clark@example.com", phone: "5056067070", age: 31 }
];

// Define the root route
app.get("/", (req, res) => {
  res.send("server is running 5000");
});

app.get("/users", (req, res)=>{
  res.json(users);
})

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
