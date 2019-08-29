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
            resolve(await pool.query(`SELECT * FROM debt WHERE id_debt = '${id}'`))
        }).catch(errHandler)
    },
    getDebtWithoutPayment : function() {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT * FROM debt LEFT OUTER JOIN payment ON debt.id_debt = payment.id_debt WHERE payment.id_debt IS null`))
        }).catch(errHandler)
    },
    getPortfolioEfficiency : function() {
        return new Promise(async (resolve, reject) => {
            let rez = await pool.query(`SELECT Portfolio_name, sum(Portfolio_payment)/sum(Debt_sum)*100 AS Efficienty
        from (
            SELECT id_portfolio, id_debt, Debt_sum, SUM(Payment_sum) AS Portfolio_payment
            FROM pkb.debt
            left JOIN pkb.payment using(id_debt)
            GROUP BY id_debt, id_portfolio
        ) as one
            RIGHT JOIN pkb.portfolio using(id_portfolio)
            GROUP BY id_portfolio`);
            resolve(rez)
        }).catch(errHandler)
    },
}

module.exports = Debt
