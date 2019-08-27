const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Calendar = {
    get: function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT * FROM calendar'))
        }).catch(errHandler)
    },
}

module.exports = Calendar
