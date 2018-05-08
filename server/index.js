const express = require('express');
const path = require('path');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
  if (path.extname(req.url)) {
    res.sendStatus(404);
  } else {
    res.sendFile(path.join(publicPath, 'index.html'));
  }
});

// // pseudocode! DOES NOT REALLY WORK...REALLY!
// app.get('*', (req, res, next) => {
//   if (isFrontendRoute(req.url)) {
//     res.sendFile(path.join(publicPath, 'index.html'));
//   } else {
//     res.sendStatus(404);
//   }
// });

const db = require('./models');
db.sync().then(() => {
  console.log('tables created in db');
  app.listen(3000, () => console.log('listening for requests on port 3000'));
});
