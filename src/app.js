require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
  })
  
const express = require('express');
const bodyParser = require('body-parser')
const { User, Watchlist } = require('./app/models');
const routes = require('./routes')
  
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)
// app.use(express.urlencoded({ extended: false }));
// User.create({ name: 'Jorge', email: 'jorge@popo.com.br', password: '123456' });
// Watchlist.create({ user_id: 1, movies_list: ['Matrix', 'Harry Potter']})
  
module.exports = app
  