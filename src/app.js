var express = require('express');
var todoRouter = require('./todoRouter');
var personRouter = require('./personRouter');
var app = express();


app.use(express.static('./public/todoapp/dist'));

app.use('/todo', todoRouter);
app.use('/person', personRouter);

app.use('*', function (req, res) {
    console.log('redirecting');
    res.redirect('/');
})

if (!process.env.HOST_ON_IIS)
    process.env.PORT = 3000

app.listen(process.env.PORT, function () {
    console.log('start listening');
});