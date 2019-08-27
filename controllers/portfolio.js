const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            msg : err
        });
    },
    Portfolio = require('../models/Portfolio.js')


router.get('/all', async (req, res) => {
    let rez = await Portfolio.get();
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

router.get('/:id', async (req, res) => {
    let rez = await Portfolio.getById(req.params.id);
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

module.exports = router