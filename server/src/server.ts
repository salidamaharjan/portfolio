import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("../client/dist"));
app.use(router);

app.get("*", (req, res) => {
  res.sendFile("../client/dist/index.html");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
