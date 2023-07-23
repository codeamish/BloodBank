const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));


// app.use('/api/v1/bloodBank', );
// app.use('/api/v1/appointment', );



app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl}`
    })
})


module.exports = app;
