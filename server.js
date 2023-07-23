const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = require('./index');

dotenv.config()

let database_url = process.env.DATABASE_URL;
database_url = database_url.replace("<password>", process.env.DATABASE_PASSWORD);


class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`${database_url}`, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    server.close(() => {
      process.exit(1);
    });
});
  