const express = require("express");
const app = express();


const static = express.static("public");
app.use(static);


// app.post("/:id", function (req, res) {
//     //   console.log(req.body);
//     console.log(req.params.)
  
//     res.send("Submitted");
//   });

// app.get("/:username", function (req, res) {
//     // const doc = vasukadb.doc(req.body.name);
//     console.log(req.params.username);
//     res.send("Get it");
// });

app.listen(3000);
