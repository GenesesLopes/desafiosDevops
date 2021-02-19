const express = require('express');
const app = express();
const port = 3000;
const faker = require('faker/locale/pt_BR')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

const sqlInsert = `INSERT INTO people(name) VALUES('${faker.name.findName()}')`
const sqlSelect = `SELECT * FROM people`
const connection = mysql.createConnection(config)
var resultQuery;
connection.query(sqlInsert)
connection.query(sqlSelect, (error, result, rows) => {
    resultQuery = result
}) 
connection.end();


app.get('/', (req, res) => {
    let html = '<ul>'
    resultQuery.map((item) => {
        html += `<li>${item.name}</li>`
    })
    html += '</ul>'

    res.send(`<h1>Full Cycle Rocks!</h1><br/>${html}`)

})


app.listen(port, () => {
    console.log(`Node Executando na porta ${port}`)
})