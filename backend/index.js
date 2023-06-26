import express from "express"
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
//import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://127.0.0.1:5173",
    })
  );

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

const app = express()



app.listen(8800, ()=>{
    console.log("Connected to backend!")
})