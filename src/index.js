const express = require('express');
const { User, Watchlist } = require('./app/models');

const app = express();

app.use(express.urlencoded({ extended: false }));
// User.create({ name: 'Jorge', email: 'jorge@popo.com.br', password: '123456' });
Watchlist.create({ user_id: 1, movies_list: ['Matrix', 'Harry Potter']})


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
	console.log("Server running in port 3000")
});