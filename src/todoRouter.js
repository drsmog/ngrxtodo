var router = require('express').Router();

var fakeTodoDB = [];

router.get('/', function (req, res) {
    res.send({
        success: true,
        data: fakeTodoDB,
        message: 'ok'
    });
});

router.post('/', function (req, res) {
    let newTodo = req.body;
    newTodo.id = fakeTodoDB.length + 1;
    res.send({
        success: true,
        data: newTodo,
        message: 'ok'
    });
});

module.exports = router;