const express = require("express");
const path = require("path");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config();

//models
// const TodoTask = require("./models/TodoTask");

// const mongoose = require("mongoose");
// //connection to db
// mongoose.set("useFindAndModify", false);
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: false }, () => {
//     console.log("Connected to db!");
//     app.listen(3000, () => console.log("Server Up and running"));
// });


app.use("/static", express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('./todo.ejs');
});
app.listen(3000, () => console.log("Server Up and running"));