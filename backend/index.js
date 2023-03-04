const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const inventoryRoutes = require("./routes/inventory");
const usersRoutes = require("./routes/users");

const app = express();
const port = 4000;

mongoose
  .connect(
    "mongodb+srv://hoangminhtuan:minhtuan@mindx.6bk82vv.mongodb.net/mindx",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MONGODB TO CONNECTED");
  })
  .catch((err) => {
    console.error(`connection error: ${err}`);
  });
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/inventory", inventoryRoutes);
app.use("/users", usersRoutes);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
