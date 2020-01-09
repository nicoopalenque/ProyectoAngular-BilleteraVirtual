const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //bodyParser nos permite reicibir parametros por POST

const mysqlConnection = require('../database.js');

// GET all Gestores
router.get('/gestores', (req, res) => {
    mysqlConnection.query('SELECT * FROM gestores', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// GET An Gestor por Id
router.get('/gestores/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM gestores WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Hubo un problema para generar la respuesta'
            });
        }
    });
});
// GET An Gestor por dni
router.get('/gestores/dni/:dni', (req, res) => {
    const { dni } = req.params;
    mysqlConnection.query('SELECT * FROM gestores WHERE dni = ?', [dni], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// DELETE An Gestor
router.delete('/gestores/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM gestores WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
        } else {
            console.log(err);
        }
    });
});
// DELETE An Gestor por dni
router.delete('/gestores/dni/:dni', (req, res) => {
    const { dni } = req.params;
    mysqlConnection.query('DELETE FROM gestores WHERE dni = ?', [dni], (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
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
router.post('/gestores/', urlencodedParser, (req, res) => {
    const { nombre, apellido, dni, provincia, usuario, clave, saldo } = req.body;

    let sql = 'INSERT INTO gestores(nombre, apellido, dni, provincia, usuario, clave, saldo) VALUES (?,?,?,?,?,?,?)';
    var valores = [nombre, apellido, dni, provincia, usuario, clave, saldo];

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
        } else {
            console.log(err);
        }
    });
});



// Update un Gestor
router.put('/gestores/dni/:dni', urlencodedParser, (request, response) => {
    const dni = request.params.dni;
    const { saldo } = request.body;
    /* response.json({
        dni: dni,
        saldo: saldo
    }); */
    let sql = 'UPDATE gestores SET saldo=' + saldo + ' WHERE dni=' + dni;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err) {
            response.json({ ok: true });
        } else {
            console.log(err);
        }
    });

});

module.exports = router;