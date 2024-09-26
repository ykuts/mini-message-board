const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const indexRouter = require('./routes/index');
const newMessageRouter = require('./routes/newMessage');



app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(express.urlencoded({ extended: true })); // To parse form data

// Use the routes
app.use('/new', newMessageRouter);
app.use('/', indexRouter);


app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));