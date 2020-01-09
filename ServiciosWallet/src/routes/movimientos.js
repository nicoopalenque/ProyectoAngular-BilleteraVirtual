const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //bodyParser nos permite reicibir parametros por POST

const mysqlConnection = require('../database.js');




// GET all Movimientos
router.get('/movimientos', (req, res) => {
    mysqlConnection.query('SELECT * FROM movimientos', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
router.get('/movimientos/dni/:dni', (req, res) => {
    const { dni } = req.params;
    mysqlConnection.query('SELECT * FROM movimientos WHERE id_usuario_origen = ?',[dni], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// INSERT An Gestor
router.post('/movimientos/', urlencodedParser, (req, res) => {

    const { fecha, id_tipo_de_operacion, tipo_de_operacion, costo_operacion, id_gestor, id_usuario_origen, id_usuario_destino, monto_operacion, valor_comision, saldo_inicial_origen, saldo_final_origen, saldo_inicial_destino, saldo_final_destino } = req.body;
    let sql = 'INSERT INTO movimientos(fecha, id_tipo_de_operacion, tipo_de_operacion, costo_operacion, id_gestor, id_usuario_origen, id_usuario_destino, monto_operacion, valor_comision, saldo_inicial_origen, saldo_final_origen, saldo_inicial_destino, saldo_final_destino) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var valores = [fecha, id_tipo_de_operacion, tipo_de_operacion, costo_operacion, id_gestor, id_usuario_origen, id_usuario_destino, monto_operacion, valor_comision, saldo_inicial_origen, saldo_final_origen, saldo_inicial_destino, saldo_final_destino];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
        } else {
            console.log(err);
        }
    });
});




module.exports = router;