const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

require('./models');

app.use(cors());

/* CROS middleware */
app.use(function (req, res, next) {

  // All domain
  // res.header("Access-Control-Allow-Origin", "*");

  // Specific domain
  res.header("Access-Control-Allow-Origin", process.env.DOMAIN_URL || "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// icon for bookmarks
app.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})