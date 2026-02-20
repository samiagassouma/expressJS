const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from backend 🚀" });
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;
    res.json({ reply: `Hello ${name}` });
});

app.listen(5000, () =>
    console.log("Backend running on http://localhost:5000")
);
