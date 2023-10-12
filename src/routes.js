const express = require("express");

const {
  registerUser,
  detailUser,
  updateUser,
} = require("./controllers/userController");
const validateRequest = require("./middlewares/validateRequest");
const userSchema = require("./validations/userSchema");

const { getCategories } = require("./controllers/categoryController");

const login = require("./controllers/loginController");
const loginSchema = require("./validations/loginSchema");
const authenticatedUser = require("./middlewares/authentication");

const route = express();

route.get("/categoria", getCategories);

route.post("/usuario", validateRequest(userSchema), registerUser);
route.post("/login", validateRequest(loginSchema), login);

route.use(authenticatedUser);

route.get("/usuario", detailUser);
route.put("/usuario", validateRequest(userSchema), updateUser);

module.exports = route;
