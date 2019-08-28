const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Calendar = {
    get: function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT *, DATE_FORMAT(Cal_date,\'%d.%m.%Y\') AS Cal_date FROM calendar'))
        }).catch(errHandler)
    },
}

module.exports = Calendar
