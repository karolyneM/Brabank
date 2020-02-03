const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '18.206.220.160',
    port: 3306,
    user: 'karolyne',
    password: 'apll11',
    database: 'brabank'
})

module.exports = conexao
