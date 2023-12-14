const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongo server
const dbConnection = require("./config/dbConfig");
dbConnection();

// routes
app.use("/api/form", require("./routes/formRoutes"));

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
