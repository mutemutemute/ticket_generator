const express = require("express");
const AppError = require("./utilities/appError");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const ticketRouter = require("./routers/ticketRouter");
const cors = require("cors")
 
// create server
const app = express();


// Middleware - parsed data to req.body.
app.use(express.json());

app.use(cookieParser());
app.use(cors());



app.use("/api/v1/tickets", ticketRouter);

app.all('*', (req, res, next) => {
  
  const error = new AppError(`Not found - ${req.originalUrl}`, 404);
  next(error);
});
 

app.use(errorHandler)



module.exports = app;








