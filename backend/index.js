import express from "express"
import mongoose from "mongoose";
import bookRouter from "./routes/book.route.js";
import cors from "cors";
import userRoute from "./routes/user.route.js"

const app = express();

app.use(cors());

app.use(express.json());

import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

//connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("connected to DB");
} catch (error) {
    console.log("error", error);
}

//defining routes
app.use("/book", bookRouter)

app.use("/user", userRoute)


app.listen(PORT,()=> {
    console.log(`server started on port ${PORT}`)
});