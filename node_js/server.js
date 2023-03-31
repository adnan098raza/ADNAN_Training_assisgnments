const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
app.get('/users', (req, res) => {
    const users = [
      {id: 1, name: 'John'},
      {id: 2, name: 'Jane'}
    ];
    res.json(users);
  });
  app.post('/users', (req, res) => {
    const user = req.body;
    // Save the user to the database
    res.json(user);
  });
    