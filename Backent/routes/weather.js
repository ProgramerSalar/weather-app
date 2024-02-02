import express from "express"
import { weather } from "../controllers/weather.js"

const app = express()


app.post("/weather", weather)



export default app;