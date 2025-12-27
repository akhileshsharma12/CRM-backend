import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import "./models/user.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Connect DB and Start
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(5000, () => console.log("Server running on 5000"));
}).catch(err => console.log(err));
