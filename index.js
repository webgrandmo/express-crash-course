const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./api/Members');
const app = express();

const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.hostname}${req.url} : ${moment().format()}`);
	next();
};

// Init middleware
app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Get's All Members
app.get('/api/members', (req, res) => res.json(members));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
