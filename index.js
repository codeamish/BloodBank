const express = require('express');
const bloodBankRouter = require('./routes/bloodBankRoutes.js');
const appointmentRouter = require('./routes/appointmentRoutes.js');
const bookingRouter = require('./routes/bookingRoutes.js');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/bloodBank',bloodBankRouter);
app.use('/api/v1/booking', bookingRouter);
app.use('/api/v1/appointment', appointmentRouter);



app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl}`
    })
})


module.exports = app;
