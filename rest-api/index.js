const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const multer = require("multer")
const path = require("path")


// routes
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const conversationRoute = require("./routes/conversations")
const messageRoute = require("./routes/messages")


dotenv.config()
const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_URL, 
          {
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
          }, 

          () => {console.log("Connected to MongoDB")}
);


// path
app.use("/images", express.static(path.join(__dirname, "public/images")))


// middleware 
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


// multer
const storage = multer.diskStorage({
          destination: (req, file, cb) => {
                    cb(null, "public/images");
          },
          
          filename: (req, file, cb) => {
                    cb(null, req.body.name);
          },
});


const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
          try {
                    return res.status(200).json("File uploded successfully");
          } catch (error) {
                    console.error(error);
          }
});


// endpts
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/conversations", conversationRoute)
app.use("/api/messages", messageRoute)


app.listen(PORT, () => {
          console.log(`Backend server is running on port ${PORT}`);
})