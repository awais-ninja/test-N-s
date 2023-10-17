const PORT = 4040;
const express = require("express");
const app = express();
app.use(require("cors")());

const { exec } = require("child_process");

app.get("/get", (req, res) => {
  exec("net user", (error, stdout, stderr) => {
    if (error) console.log(error);
    if (stderr) console.log(stderr);
    const pattern = /(\b[A-Za-z0-9_-]+\b)/g;
    const finalOutcome = stdout.match(pattern);
    res.status(200).send(finalOutcome);
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is online at port ${PORT}`);
});
