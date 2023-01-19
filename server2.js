const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server);
const mysql = require('mysql2');

const PORT = 8888 || 3000;


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'dash'
});


let last = null; // SALVA O ULTIMO ID

io.on('connection', socket => {
    console.log('New client connected');

    function graficoMes() {
        connection.query(`SELECT DATE_FORMAT(vendas.data, '%m/%Y')   AS mes,
                                 SUM(vendas.valor)                        AS valor
                          FROM vendas
                          GROUP BY mes
                          ORDER BY mes`, (err, rows) => {
            if (err) throw err;

            // if (rows.length > 0 && JSON.stringify(rows) !== JSON.stringify(categoria)) {
            //   categoria = rows;
            //   io.emit('DADOS_CATEGORIA', rows);
            // }

            io.emit('DADOS_GRAFICO', rows);

            graficoMes();
        });
    }

    function graficoCategoria() {
        connection.query(`SELECT categoria,
                                 SUM(vendas.valor) AS valor
                          FROM vendas
                          GROUP BY categoria
                          ORDER BY categoria`, (err, rows) => {
            if (err) throw err;

            io.emit('DADOS_CATEGORIA', rows);

            graficoCategoria();
        });
    }

    graficoCategoria();
    graficoMes();

});


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Para rodar o servidor, execute o comando:
// node server.js
