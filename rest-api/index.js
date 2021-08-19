const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")

// routes
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
          {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
          }, 
          
          () => {console.log("Connected to MongoDB")}
);

// middleware 
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(5000, () => {
          console.log("Backend server is running");
})