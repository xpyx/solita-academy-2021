const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'solita',
    process.env.DB_USER || 'solita',
    process.env.DB_PASSWORD || 'solita',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });
const Person = sequelize.define('person', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
});
module.exports = {
    sequelize: sequelize,
    Person: Person
};
