import express from "express";
import dotenv from 'dotenv';
import { db } from "./db/db.js";
import userRoutes from "./routes/userRoutes.js"
import morgan from "morgan";
import helmet from "helmet";
import { errorHandler, routeNotFound } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PROT || 5000;
db();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Node</h1>`);
});


app.use(express.json());
//pass json data into client or use bodyparser middleware
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cookieParser());
if(process.env.NODE_ENV !== 'production'){
  app.use(morgan("dev"));
}
app.use("/api/users", userRoutes)
app.use('/*', routeNotFound);
app.use(errorHandler);

// console.log(5 + 6 + 5);

app.listen(port, console.log(`app is running on port ${port}`));
