
let db = require('../database.js');
db.sequelize.sync({force: true});
