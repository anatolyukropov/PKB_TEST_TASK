const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            msg : err
        });
    },
    Calendar = require('../models/Calendar.js')


router.get('/all', async (req, res) => {
    let rez = await Calendar.get();
    res.status(200).json({
        success : true,
        response :  rez
    });
});

module.exports = router