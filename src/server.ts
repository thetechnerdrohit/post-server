import express from "express";
import { db } from "./config/db.config";
import router from "./routes";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => {
    console.log("Express api running on port 3000!", { PORT });
  });
});

// api url - http://localhost:3000/api/post/addPost
