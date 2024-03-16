// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/route-handler", (req, res) => {
//   res.json({
//     name: "saunak",
//     age: 20,
//   });
// });

// app.get("/conversation", (req, res) => {
//   res.send("1 + 1 = 2");
// });

// app.get("/saunak", (req, res) => {
//   res.send("saunak is a good boy");
// });
// app.get("/saunak1", (req, res) => {
//   res.json({
//     name: "saunak",
//     age: 20,
//     hehe: "good and chill",
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// function calculatesum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// const app1 = express();

// app1.get("/", (req, res) => {
//   const n = req.query.n;
//   const ans = calculatesum(n);
//   res.send(ans.toString());
// });

// app1.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// const app = express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", (req, res) => {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send(ans.toString());

// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// in memory hospital

// const express = require("express");

// const app = express();

// get = user can check how many kidneys they have and their health
// post - user can add a new kidney
// put - user can replace a kidney make it healthy
// delete - user can remove a kidney

// const users = [
//   {
//     name: "saunak",
//     age: 20,
//     kidneys: 3,
//     healthy: true,
//   },
//   {
//     name: "sachin1",
//     age: 20,
//     kidneys: 2,
//     healthy: false,
//   },
//   {
//     name: "sachin",
//     age: 20,
//     kidneys: 2,
//     healthy: true,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(users);
// });
// app.put("/", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const kidneys = req.body.kidneys;
//   const healthy = req.body.healthy;
//   const user = {
//     name: name,
//     age: age,
//     kidneys: kidneys,
//     healthy: healthy,
//   };
//   users.push(user);
//   res.send(users);
// });
// app.use(express.json());
// app.post("/", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const kidneys = req.body.kidneys;
//   const healthy = req.body.healthy;
//   const user = {
//     name: name,
//     age: age,
//     kidneys: kidneys,
//     healthy: healthy,
//   };

//   // users.push(user);
//   res.send(users);
// });

// app.put("/", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const kidneys = req.body.kidneys;
//   const healthy = req.body.healthy;
//   const index = users.findIndex((user) => user.name === name);
//   users[index] = {
//     name: name,
//     age: age,
//     kidneys: kidneys,
//     healthy: healthy,
//   };
//   res.send(users);
// });

// app.delete("/", (req, res) => {
//   const newkidney = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name !== req.body.name) {
//       newkidney.push(users[i]);
//     }
//   }
//   users = newkidney;
//   res.json(users);
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

