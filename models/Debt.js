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
    getDebtor : function(sum) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT FIO, SUM(Debt_sum) AS user_debt FROM debt INNER JOIN person using(id_person) GROUP BY id_person HAVING SUM(Debt_sum) > ${sum}`))
        }).catch(errHandler)
    },
}

module.exports = Debt
