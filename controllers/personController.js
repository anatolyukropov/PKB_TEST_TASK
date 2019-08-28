const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            msg : err
        });
    },
    Person = require('../models/Person.js')


router.get('/all', async (req, res) => {
    let rez = await Person.get();
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

router.get('/:id', async (req, res) => {
    let rez = await Person.getById(req.params.id);
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

router.post('/update/:id/fio/:fio', async (req, res) => {
    let rez = await Person.update(req.params.fio, req.params.id);
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

module.exports = router