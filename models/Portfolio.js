const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Portfolio = {
    get: function() {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT *, DATE_FORMAT(Sign_date,\'%d.%m.%Y\') AS Sign_date, DATE_FORMAT(End_date,\'%d.%m.%Y\') AS End_date   FROM portfolio'))
        }).catch(errHandler)
    },
    getById : function(id) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT * FROM portfolio WHERE id_portfolio = '${id}'`))
        }).catch(errHandler)
    },
}

module.exports = Portfolio
