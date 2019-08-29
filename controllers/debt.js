const express    = require('express'),
    router       = express.Router(),
    errHandler  = (err) => {
        throw new Error(err)
        return res.status(400).json({
            response : err
        });
    },
    Debt = require('../models/Debt.js')


router.get('/all', async (req, res) => {
    let rez = await Debt.get();
    res.status(200).json({
        success : true,
        response :  rez
    });
});

router.get('/id/:id', async (req, res) => {
    let rez = await Debt.getById(req.params.id);
    res.status(200).json({
        success : true,
        response :  rez
    });
});

router.get('/debtor/:sum', async (req, res) => {
    let rez = await Debt.getDebtor(req.params.sum);
    res.status(200).json({
        success : true,
        response :  rez
    });
});

router.get('/debtWithoutPayment/', async (req, res) => {
    let rez = await Debt.getDebtWithoutPayment();
    res.status(200).json({
        success : true,
        response :  rez
    });
});
router.get('/portfolioEfficiency/', async (req, res) => {
    let rez = await Debt.getPortfolioEfficiency();
    res.status(200).json({
        success : true,
        response :  rez
    });
});

module.exports = router