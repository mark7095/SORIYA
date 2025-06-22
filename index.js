const express = require("express");
const app = express();

// 루트 접속 시 기본 응답
app.get("/", (req, res) => {
  res.send("🔥 Hello from SORIYA backend!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
