import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes";
import cors from "cors";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
