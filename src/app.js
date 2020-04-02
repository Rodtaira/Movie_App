require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
  })
  
const express = require('express');
const { User, Watchlist } = require('./app/models');
const routes = require('./routes')
  
const app = express();
  
app.use(routes)
app.use(express.urlencoded({ extended: false }));
// User.create({ name: 'Jorge', email: 'jorge@popo.com.br', password: '123456' });
// Watchlist.create({ user_id: 1, movies_list: ['Matrix', 'Harry Potter']})
  
module.exports = app
  