const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Auth = require("./Routes/Auth")
const Post = require("./Routes/PostRoutes")

const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5173", credentials: true, methods: ["GET", "POST", "PUT", "DELETE"]}))

app.use("/ResumeGenerator", Auth)
app.use("/ResumeGenerator", Post)


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})