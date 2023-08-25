const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.s6pohbg.mongodb.net/socialNetwork');

module.exports = connection;
