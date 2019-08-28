const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Debt = {
    get: function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT *  FROM debt INNER JOIN person using(id_person) INNER JOIN portfolio using(id_portfolio)' ))
        }).catch(errHandler)
    },
    getById : function(id) {
        return new Promise(async (resolve, reject) => {
            console.log('тут')
            resolve(await pool.query(`SELECT * FROM debt WHERE id_debt = '${id}'`))
        }).catch(errHandler)
    },
    getDebtor : function(sum) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT FIO, SUM(Debt_sum) AS user_debt FROM debt INNER JOIN person using(id_person) GROUP BY id_person HAVING SUM(Debt_sum) > ${sum}`))
        }).catch(errHandler)
    },
    getDebtWithoutPayment : function() {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT * FROM debt LEFT OUTER JOIN payment ON debt.id_debt = payment.id_debt WHERE payment.id_debt IS null`))
        }).catch(errHandler)
    },
    getPortfolioEfficiency : function() {
        return new Promise(async (resolve, reject) => {
            let debtSum = await pool.query(`SELECT Portfolio_name, SUM(Debt_sum) AS Portfolio_debt FROM debt RIGHT JOIN portfolio using(id_portfolio) GROUP BY id_portfolio ORDER BY Portfolio_name`),
                paymentSum = await pool.query(`SELECT Portfolio_name, SUM(Payment_sum) AS Payment_sum FROM payment INNER JOIN debt using(id_debt) RIGHT JOIN portfolio using(id_portfolio) GROUP BY Portfolio_name ORDER BY Portfolio_name`),
                rez = [];
            for (let i=0; i < debtSum.length; i++) {
                console.log('paymentSum[i].Payment_sum', paymentSum[i].Payment_sum)
                console.log('debtSum[i].portfolio_debt', debtSum[i].Portfolio_debt)
                rez.push({Portfolio_name : debtSum[i].Portfolio_name, Efficiency : (paymentSum[i].Payment_sum/debtSum[i].Portfolio_debt)*100 })
            }
            resolve(rez)
        }).catch(errHandler)
    },
}

module.exports = Debt
