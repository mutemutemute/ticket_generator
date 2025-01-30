const {createTicket} = require("../models/ticketModel");
const {validate} = require("../validators/validate");
const { nanoid } = require('nanoid');

exports.createNewTicket = async (req, res, next) => {
    const newTicket = req.body;
    const ticketId = nanoid(6);
    newTicket.ticket_id = ticketId;
    try {
      const createdTicket = await createTicket(newTicket);
      res.status(201).json({
        status: "success",
        data: createdTicket,
      });
    } catch (error) {
      next(error);
    }
  };