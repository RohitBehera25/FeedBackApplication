const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use;
app.use(express.json());

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abc123",
  database: "fb21june24",
});

app.post("/save", (req, res) => {
  let data = [req.body.name, req.body.feedback];
  let sql = "insert into student value(?,?)";
  con.query(sql, data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(9100, () => {
  console.log("ready to serve @9100");
});
