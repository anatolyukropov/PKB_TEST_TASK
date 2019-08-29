const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            response : err
        });
    },
    Payment = require('../models/Payment.js')


router.get('/all', async (req, res) => {
    let rez = await Payment.get();
    res.status(200).json({
        success : true,
        response :  rez
    });
});

router.get('/:id', async (req, res) => {
    let rez = await Payment.getById(req.params.id);
    res.status(200).json({
        success : true,
        response :  rez
    });
});

module.exports = router