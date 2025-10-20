import express from "express";
import dotenv from "dotenv";

dotenv.config(); // load .env variables

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
