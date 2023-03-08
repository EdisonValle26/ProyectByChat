//require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//     try {
//         const r = await axios.put(
//           "https://api.chatengine.io/users/",
//           { username: username, secret: username, first_name: username },
//           { headers: { "private-Key": "6d0147af-2e78-49d0-8469-4ea4763db1be" } }
//         );
//         return res.status(r.status).json(r.data);
//       } catch (e) {
//         return res.status(e.response.status).json(e.response.data);
//       }
// });

// // Docs at rest.chatengine.io
// // vvv On port 3001!
// app.listen(3000);

//require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // console.log("Write user into DB.");
  // return res.json({ user: {} });

  // Store a user-copy on Chat Engine!
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": "6d0147af-2e78-49d0-8469-4ea4763db1be"} }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // console.log("Fetch user from DB.");
  // return res.json({ user: {} });

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": "a36d8b9d-b6b0-47b5-b99a-c5a46766b42c",
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Docs at rest.chatengine.io
// vvv On port 3001!
app.listen(3000);