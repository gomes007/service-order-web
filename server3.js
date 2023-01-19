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


let lastSearch = null; // SALVA A ULTIMA BUSCA

io.on('connection', socket => {
    console.log('New client connected');

    function getGraficos() {
        connection.query(`SELECT DATE_FORMAT(vendas.data, '%m/%Y')   AS mes,
                             SUM(vendas.valor)                        AS valor
                      FROM vendas
                      GROUP BY mes
                      ORDER BY mes`, async (err, rows) => {
            if (err) throw err;

            if (rows.length > 0 && JSON.stringify(rows) !== JSON.stringify(lastSearch)) {
                lastSearch = rows;

                let meses = [];

                await rows.forEach(row => {
                    if (!meses.includes(row.mes)) {
                        meses.push(row.mes);
                    }
                });

                let dados = [];

                await meses.forEach(async mes => {
                    let total = 0;

                    await rows.forEach(row => {
                        if (row.mes === mes) {
                            total += row.valor;
                        }
                    });

                    dados.push({
                        'mes': mes,
                        'valor': total
                    });
                });

                console.log(dados);

                io.emit('DADOS_GRAFICO', dados);

                // Grafico de Categoria

                let categorias = [];

                await rows.forEach(row => {
                    if (!categorias.includes(row.categoria)) {
                        categorias.push(row.categoria);
                    }
                });

                let dadosCategoria = [];

                await categorias.forEach(async categoria => {
                    let total = 0;

                    await rows.forEach(row => {
                        if (row.categoria === categoria) {
                            total += row.valor;
                        }
                    });

                    dadosCategoria.push({
                        'categoria': categoria,
                        'valor': total
                    });
                });

                io.emit('DADOS_CATEGORIA', dadosCategoria);
            }

            getGraficos();
        });
    }


    getGraficos();
});




server.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Para rodar o servidor, execute o comando:
// node server.js
