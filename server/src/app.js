import express from "express";
import cors from "cors";
import morgan from "morgan";
import user from "./routes/user.js";
import roadmap from "./routes/roadmap.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//router middleware
app.use("/api/v1", user);
app.use("/api/v1", roadmap);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

export { app };
