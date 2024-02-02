import express from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.json());
config({
  path: ".env",
});
app.use(cors());
app.use(morgan("dev"));

// routes
import weatherRoutes from "./routes/weather.js";

app.use("/", weatherRoutes);

app.listen(5000, () => {
  console.log("server is running.....");
});
