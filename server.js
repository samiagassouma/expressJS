const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
    res.json({ message: "Hello from backend ðŸš€" });
});

app.post("/data", (req, res) => {
    const { name } = req.body;
    res.json({ reply: `Hello ${name}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log("Backend running on http://localhost:5000")
);
