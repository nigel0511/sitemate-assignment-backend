import express, { Express } from "express";
import userRoute from "./routes/users";
const app: Express = express();
const port = 3000;

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
