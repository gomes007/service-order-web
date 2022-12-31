const db = require('../../../src/models/index');

export default async function handler(req, res) {
    const {method} = req;

    try {
        const [results, metadata] = await db.query(
            `SELECT categoria,
                    SUM(vendas.valor) AS valor
             FROM vendas
             GROUP BY categoria
             ORDER BY categoria`
        );
        res.status(200).json({data: results});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
