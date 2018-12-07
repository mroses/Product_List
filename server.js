const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('dist/commerce')));

require('./server/config/database');

app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catch-all.route'));
app.listen(port, () => console.log(`listening on port ${ port }`));
