const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.s6pohbg.mongodb.net/developersApplications');

module.exports = connection;
