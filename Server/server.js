const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//This can be removed later, just for firs push purposes.
app.get('/api/hello', (req, res) => {
    console.log("AAAAAAAAAAA");
    res.send({ express: 'Hello From Express' });
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));