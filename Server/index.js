const express = require("express");
const app = express();
const morgan = require("morgan");
const websiteRoutes = require("./routes/websites");
const reviewRoutes = require("./routes/reviews");
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/websites", websiteRoutes);

// app.use(express.static(path.join(__dirname, "public")));
function authorize(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ Message: "No token. authorized access! " });
  }
  if (jwt.verify(token, secret)) {
    req.decoded = jwt.decode(token);
    console.log(req.decoded);
    next;
  }
}

const users = {};

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const user = (users[username] = {
    name,
    password,
  });
  return res.json({ success: "true" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    const token = jwt.sign({ name: user.name });
    return res.status(200).json({ token });
  }
  return res.status(500).json({ message: "ERROR MESSAGE! " });
});

app.get("/profile", authorize, (req, res) => {
  console.log(req.decoded);
  res.json(req.decoded);
});

app.listen(PORT, () => {
  console.log(`Express Server is running on PORT http://localhost:${PORT}`);
});
