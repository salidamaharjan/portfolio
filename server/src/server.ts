import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes";
import cors from "cors";
import loggedInUserMiddleware from "./loggedInUser";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(loggedInUserMiddleware);
app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
