const express = require("express");
const validate = require("../validators/validate");
const {createNewTicket} = require("../controllers/ticketController");
const validateTicket = require("../validators/ticket");

const router = express.Router();

router.route("/").post(validateTicket, validate, createNewTicket);

module.exports = router;

