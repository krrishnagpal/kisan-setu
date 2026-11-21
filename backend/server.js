const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// =========================
// MIDDLEWARE
// =========================

app.use(cors());
app.use(express.json());


// =========================
// MONGODB CONNECTION
// =========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });


// =========================
// FARMER SCHEMA
// =========================

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    village: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Farmer = mongoose.model("Farmer", farmerSchema);


// =========================
// COMMUNITY POST SCHEMA
// =========================

const postSchema = new mongoose.Schema(
  {
    farmerName: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    replies: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


const Post = mongoose.model("Post", postSchema);


// =========================
// HOME ROUTE
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "KissanSetu Backend is running 🌾",
  });
});


// =========================
// FARMER ROUTES
// =========================


// Add a new farmer

app.post("/api/farmers", async (req, res) => {
  try {

    const farmer = new Farmer(req.body);

    const savedFarmer = await farmer.save();

    res.status(201).json({
      message: "Farmer registered successfully",
      farmer: savedFarmer,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error registering farmer",
      error: error.message,
    });

  }
});


// Get all farmers

app.get("/api/farmers", async (req, res) => {
  try {

    const farmers = await Farmer.find();

    res.json(farmers);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching farmers",
      error: error.message,
    });

  }
});


// =========================
// COMMUNITY POST ROUTES
// =========================


// Create a community post

app.post("/api/posts", async (req, res) => {
  try {

    const post = new Post(req.body);

    const savedPost = await post.save();

    res.status(201).json({
      message: "Post created successfully",
      post: savedPost,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error creating post",
      error: error.message,
    });

  }
});


// Get community posts

app.get("/api/posts", async (req, res) => {
  try {

    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.json(posts);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching posts",
      error: error.message,
    });

  }
});


// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`KissanSetu server running on port ${PORT}`);
});