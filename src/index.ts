import express from "express";
import router from "./router";
const app: express.Application = express();
const port: number = 3000;

app.use("/api", router);

app.listen(port, (): void => {
    console.log(`Server Is Starting In http://localhost:${port};`);
})