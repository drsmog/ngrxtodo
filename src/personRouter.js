var router = require('express').Router();

var fakePersonDB = [];


router.get('/', function (req, res) {
    return res.send({
        success: true,
        data: newPerson,
        message: 'ok'
    });
});

router.post('/', function (req, res) {
    let newPerson = req.body;
    newPerson.id = fakePersonDB.length + 1;
    fakePersonDB.push(newPerson);
    return res.send({
        success: true,
        data: newPerson,
        message: 'ok'
    });
})

module.exports = router;