const express = require("express");
const mongoose = require("mongoose");
const Fruits7 = require("./models/fruits7");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
require("dotenv").config();

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//connection to mongoDB
    console.log(process.env.MONGO_URI,)
async function main() {
  await mongoose.connect(
    process.env.MONGO_URI,
    console.log("Connected!!")
  );
}
main().catch((err) => console.log(err));

//TESTING
//Adding test entry to DB
const testFruit = new Fruits7({
  name: "apple",
  color: "red",
  readyToEat: true,
});
async function addTestFruit() {
  await testFruit.save();
}
//addTestFruit();

// async function del() {
//   await Fruits7.deleteMany({});
// }
// del();

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//INDEX - I
app.get("/", async (req, res) => {
  try {
    const foundFruits = await Fruits7.find({});
    res.render("Index", { fruits: foundFruits });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//NEW - N
app.get("/new", (req, res) => {
  res.render("New");
});

//DELETE - D

app.delete("/:id", async (req, res) => {
  try {
    const deleteFruit = await Fruits7.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//UPDATE - U (put)

app.put("/:id", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  try {
    await Fruits7.findByIdAndUpdate(req.params.id, req.body),
      res.redirect(`${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//CREATE - C (post)

app.post("/", async (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  try {
    await Fruits7.create(req.body), res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//EDIT - E (get form)

app.get("/:id/edit", async (req, res) => {
  try {
    const foundById = await Fruits7.findById(req.params.id);
    res.render("Edit", { fruits: foundById });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//SHOW - S (get single page)

app.get("/:id", async (req, res) => {
  try {
    const foundById = await Fruits7.findById(req.params.id);
    res.render("Show", { fruits: foundById });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
});

//route listener
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
