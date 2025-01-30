const { body } = require("express-validator");
const {findByEmail} = require("../models/ticketModel");

const validateTicket =[
body("full_name")
.notEmpty()
.withMessage("Full name is required")
.isString()
.withMessage("Full name must be a string"),

body("email")
.notEmpty()
.withMessage("Email is required")
.isEmail()
.withMessage("Please enter a valid email")
.normalizeEmail()
.custom(async (value) => {
    const existingUser = await findByEmail(value);
    if (existingUser) {
      throw new Error("A user already exists with this e-mail address",404);
    }
  }),

body("github_username")
.notEmpty()
.withMessage("Github username is required")
.isString()
.withMessage("Github username must be a string"),


]

module.exports = validateTicket;