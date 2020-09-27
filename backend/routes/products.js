const { Movie } = require("../models/movie");
const { Genre } = require("../models/genre");
const auth = require("../middleware/auth");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();