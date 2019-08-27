const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            msg : err
        });
    },
    Debt = require('../models/Debt.js')


router.get('/all', async (req, res) => {
    let rez = await Debt.get();
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

router.get('/:id', async (req, res) => {
    let rez = await Debt.getById(req.params.id);
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

router.get('/debtor/:sum', async (req, res) => {
    let rez = await Debt.getDebtor(req.params.sum);
    res.status(200).json({
        success : true,
        msg :  rez
    });
});

module.exports = router