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
    getSumByMonth: function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(`select DATE_FORMAT(Cal_date,'%d.%m.%Y') AS Cal_date , sum(Debt_sum)
                from calendar join
                (
                select portfolio_name, Sign_date, End_date, Debt_sum 
                from portfolio 
                left join debt using (id_portfolio)
                ) as one
                where date_format(Cal_date, '%Y-%m') BETWEEN date_format(Sign_date, '%Y-%m') AND date_format(End_date, '%Y-%m')
                GROUP BY Cal_date `))
        }).catch(errHandler)
    },
    getMonthEfficiency : function(query) {
        return new Promise(async (resolve, reject) => {
            resolve(await pool.query(
        `select DATE_FORMAT(Cal_date,'%d.%m.%Y') AS Cal_date, sum(Payment_sum)/sum(Debt_sum)*100 AS Efficienty from (	
	         select Cal_date, sum(Debt_sum) as Debt_sum from calendar  
	         join portfolio left join debt using(id_portfolio)
             where date_format(Cal_date, '%Y-%m') BETWEEN date_format(Sign_date, '%Y-%m') AND date_format(End_date, '%Y-%m')
	         GROUP BY Cal_date
        ) as one left join
        (
	        select Cal_date, sum(Payment_sum) as Payment_sum from calendar  
	        join payment 
            where date_format(Cal_date, '%Y-%m') = date_format(Date, '%Y-%m')
	        GROUP BY Cal_date
        ) as two using(Cal_date)
        group by Cal_date`))
        }).catch(errHandler)
    },
}

module.exports = Portfolio
