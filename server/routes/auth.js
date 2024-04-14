// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Patient=require('../models/Patient')


// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Passwords match, login successful
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Sign up endpoint
router.post('/signup', async (req, res) => {
   const { email, password } = req.body;
  console.log(req.body)
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      email,
      password // Note: In a real-world application, you should hash the password before saving it to the database
    });

    // Save user to database
    await newUser.save();

    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/products", async (req, res) => {
  
  const {name,operations} = req.body;
  // console.log(pat);
  // const newproduct = Patient.create(pat)
  // .then((e)=> res.json({ message: "Product created successfully", product: e }))
  // .catch((err)=>res.json(console.log("patient not added"+err)));
  // console.log(req.body);
  try {
    //Create a new instance of the Product model
    const newProduct = new Patient({
      name,
      operations,
    });

    // Save the new product to the database
    await newProduct.save();

    //return res.status(201).json({ message: "User created successfully", user: newUser });

    return res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
   }
});
router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    return res.status(200).json({ message: "Patient deleted successfully", patient: deletedPatient });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
