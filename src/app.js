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

app.listen(3000, function (arguments) {
    console.log(__dirname, __filename);
    console.log('start listening');
});