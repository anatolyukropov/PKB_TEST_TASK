const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Payment = {
    get: function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT * FROM payment'))
        }).catch(errHandler)
    },
    getById : function(id) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT * FROM payment WHERE id_debt = '${id}'`))
        }).catch(errHandler)
    },
}

module.exports = Payment
