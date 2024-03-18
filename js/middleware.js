const express = require("express");

const app = express();

app.get("/health", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyid = req.headers.kidneyid;

  if (username != "saunak" && password != "pass") {
    if (kidneyid == 1 || kidneyid == 2) {
      res.json({
        name: "saunak",
        age: 20,
        kidneys: 3,
        healthy: true,
      });
    }
  } else {
    res.send("not healthy");

    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
