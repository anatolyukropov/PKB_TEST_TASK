const pool = require('../config/mysql.js'),
    errHandler  = (err) => {
        throw new Error(err)
    };

const Person = {
    get: function() {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query('SELECT * FROM person'))
        }).catch(errHandler)
    },
    getById : function(id) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`SELECT * FROM person WHERE id_person = '${id}'`))
        }).catch(errHandler)
    },
    update : function (value, id) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`UPDATE person SET FIO = '${value}' WHERE id_person = '${id}'`))
        }).catch(errHandler)
    }
}

module.exports = Person
