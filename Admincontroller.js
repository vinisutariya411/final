const user = require("../models/usermodel");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    console.log("====================================");
    const users = new user({
      Email: req.body.Email,
      Username: req.body.Username,
      Password: req.body.Password,
    });
    console.log("users==", users);
    users.save();
    return res.json({ message: "Data saved successfully", users });
  } catch (error) {
    console.log(error);
    return res.json({ message: "something Went Wrong", error });
  }
};

const login = async (req, res) => {
  try {
    console.log("=====================", req.body);
    console.log("====================================");
    // const {email,password}=req.body;
    // const users = new user({
    //   Username: req.body.Username,
    //   Password: req.body.Password,
    // });
    const users = await user.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    console.log("===================>>>>>>>>==users", users);
    if (users) {
      res.send(users);
    } else {
      res.status(101).send("error");
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "something Went Wrong", error });
  }
};
const editdata = async (req, res) => {
  try {
    const users = await user.findOne({ _id: req.params.id });
    res.render("Update.ejs", { users: users });
  } catch (error) {
    console.log(error);
  }
};
const deletedata = async (req, res) => {
  try {
    const users = await user.findOneAndDelete({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const Update = async (req, res) => {
  try {
    console.log("=====================", req.body);
    const newiser = {
      Username: req.body.Username,
      Email: req.body.Email,
      Password: req.body.Password,
    };
    const users = await user.findByIdAndUpdate(req.body.id, { $set: newiser});
    if (users) {
      res.redirect("/");
    } else {
      res.status(101).send("error");
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "something Went Wrong", error });
  }
};

const Delete = async (req, res) => {
  try {
    console.log("=====================", req.body);
    console.log("====================================");
    const users = await user.deleteOne({
      Username: req.body.Username,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    console.log("===================>>>>>>>>==users", users);
    if (users) {
      res.send(users);
    } else {
      res.status(101).send("error");
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "something Went Wrong", error });
  }
};

const showdata = async (req, res) => {
  const datas = await user.find();
  console.log(datas);
  res.render("admin.ejs", { datas: datas });
};

module.exports = {
  signup,
  showdata,
  login,
  editdata,
  deletedata,
  Update,
  Delete,
};
