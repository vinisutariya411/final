const { PORT, mongoDBURL } = require("./config"); // Use require for Node.js modules

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const app = express();
const booksRoute = require("./routes/booksRoute");
// const Book = require("./models/bookModel");//4

//middleware for parsing req body
app.use(express.json())

//middleware for handling ors policy
//option 1:Allow all origins with default of cors(*)
app.use(cors())
//option 2:allow custom origins
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET', 'POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))


//2
// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send("welcome");
// });

//9
app.use('/books',booksRoute);


//3
mongoose.connect(mongoDBURL)
.then(() =>{ console.log("connected to database");
app.listen(PORT, ()=>{console.log(`app listening on : ${PORT}`)
});
})
.catch((error)=>{
    console.log(error)
})
// const mongoose = require("./config/mongoose");
// const express = require("express");
// const cors = require("cors");
// const port = 5000;
const SignupRoute = require("./routes/Sign");
const path = require("path");
const { urlencoded } = require("body-parser");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// app.get("/", (req, res) => {

//   const data = {
//     Id: "01",
//     Username: "Ashutoshthummar6925",
//     Email:
//       "ashutoshthummar8@gmail.com",
//     Password:"123",
//   };
//   res.render("admin.ejs",data);
// });
app.use(urlencoded());
app.use(express.json());
app.use(SignupRoute);
app.use(cors());

// app.listen(port, function (err) {
//   console.log("connected");
//   if (err) {
//     console.log("server is not connected ");
//     return false;
//   }
//   console.log("listening on the port", port);
// });

