# Тестовое задание

<ol> 
    <li>В БД (postgres/mysql/oracle, на выбор) создайте таблицы, реализуйте запросы без ORM</li>
    <li>Используя любой фреймворк (laravel, express, koa и т.д.) реализуйте REST сервис,
        возвращающий данные этих таблиц и результат работы SQL или PL/SQL</li>
    <li>Используя Vue.JS отобразите таблицы. Для таблицы должников добавьте
        возможность сортировки по FIO</li>
    <li>Реализуйте inline-редактирование FIO во Vue компоненте</li>
</ol>


                        Создать таблицу должников (person)
<center>

Id_person    | FIO          | 
:-----------:|:------------:|
1            | Иванов И.И.  | 
1            | Петров И.И.  | 
3            | Сидоров И.И. | 
4            | Сергеев И.И. | 
</center>

                           Создать таблицу долгов (debt)
                           
Id_person    |    Id_debt      | Id_portfolio  | Debt_sum
:-----------:|:---------------:|:-------------:|:----------:
1            |       1         | 1             | 100
1            | 2               | 2             | 200
3            | 3               | 1             | 300
4            | 4               | 3             | 400                           

                        Создать таблицу портфелей (portfolio)

Id_portfolio | Pportfolio_name | Sign_date  | End_date
:-----------:|:---------------:|:----------:|:---------:|
1            | PORTFOLIO_1     | 01.01.2011 | 21.01.2013
2            | PORTFOLIO_2     | 06.05.2012 | 20.09.2012
3            | PORTFOLIO_3     | 21.11.2012 | 16.03.2013
4            | PORTFOLIO_4     | 01.12.2012 | 11.06.2013

                         Создать таблицу платежи (payment)

Id_debt      | Payment_sum | Date  
:-----------:|:------:|:----------:
1            | 10     | 12.05.2012 
1            | 20     | 28.05.2012 
3            | 30     | 10.06.2012 
4            | 40     | 01.12.2012 

         Создать таблицу месяцев (первый день каждого месяца) (calendar)
Cal_date     | 
:-----------:|
01.01.2011   |
01.02.2011   |
01.03.2011   |
01.04.2011   |
И т.д.       |

<h3>Требуется</h3>

1.  Выбрать должников с суммой к взысканию (сумма всех долгов должника) более 150
    рублей
      
2. На каждый месяц посчитать портфель в работе.
    Портфель в работе – сумма долгов, которые находились в работе хотя бы один день в
    месяце:       
    
    Cal_date       | Portfolio_sum  | 
    :-------------:|:--------------:|
    ...            | ...            | 
    01.05.2012     | 600            | 
    ...            | ...            | 
    01.12.2012     | 800            |  

3. Посчитать эффективность по каждому портфелю (сумма всех платежей/сумма всех
   долгов):
   
   Portfolio_name|  Efficiency  | 
   :------------:|:------------:|
   PORTFOLIO_1   |    15%       | 
   PORTFOLIO_2   |    0%        | 
   PORTFOLIO_3   |    2,5%      | 
   и т.д.        |              | 
   
4. Посчитать эффективность в каждый месяц (сумма всех платежей за месяц/портфель в
   работе за месяц)
   
   Cal_date     |  Efficiency  | 
   :-----------:|:------------:|
   ...          | ...          | 
   01.05.2012   |  5%          | 
   ...          | ...          | 
   01.12.2012   | 1,25%        |  
      
5. Выбрать все долги без платежей
   
<h2>Старт проект </h2>
<p>для запуска проекта в dev mode выполните команду <br>
<code style="color:red">npm run dev</code> и перейдите на http://localhost:8080</p>

<p><code>npm run client-build</code> создаст продакш билд в папке ./client/dist,
переместите всё содержимое в папку ./public
и продакшн версяи проекта станет доступена по адресу http://localhost:5000
</p>

<h4>Запросы для проверки задания </h4>

<p>Запрос для получения ответа по Требованию № 1 <br>
<code>http://92.255.68.242:5001/api/person/debtor/150</code>
</p>

<p>Запрос для получения ответа по Требованию № 2 <br>
<code>http://92.255.68.242:5001/api/portfolio/SumByMonth</code>
</p>

<p>Запрос для получения ответа по Требованию № 3 <br>
<code>http://localhost:5001/api/debt/portfolioEfficiency</code>
</p>

<p>Запрос для получения ответа по Требованию № 4 <br>
<code>http://localhost:5001/api/portfolio/monthEfficiency</code>
</p>

<p>Запрос для получения ответа по Требованию № 5 <br>
<code>http://92.255.68.242:5001/api/debt/debtWithoutPayment/</code>
</p>

