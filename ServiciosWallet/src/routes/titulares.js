const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //bodyParser nos permite reicibir parametros por POST

const mysqlConnection = require('../database.js');

// GET all Titulares
router.get('/titulares', (req, res) => {
    mysqlConnection.query('SELECT * FROM titulares', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


// GET An Titular por Id
router.get('/titulares/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM titulares WHERE id = ?', [id], (err, rows, fields) => {
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
// GET An Titular por dni
router.get('/titulares/:usuario', (req, res) => {
    const { usuario } = req.params;
    mysqlConnection.query('SELECT * FROM titulares WHERE usuario = ?', [usuario], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Obtener saldo de titular
router.get('/titulares/dni/:dni', (req, res) => {
    
    const { dni } = req.params;
    console.log(dni);
    mysqlConnection.query('SELECT saldo FROM titulares WHERE dni = ?', [dni], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// DELETE An Titular
router.delete('/titulares/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM titulares WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
        } else {
            console.log(err);
        }
    });
});
// DELETE An Titular por dni
router.delete('/titulares/dni/:dni', (req, res) => {
    const { dni } = req.params;
    mysqlConnection.query('DELETE FROM titulares WHERE dni = ?', [dni], (err, rows, fields) => {
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

// INSERT An Titular
router.post('/titulares/', urlencodedParser, (req, res) => {
    const { nombre, apellido, dni, email, fecha_nacimiento, provinciaUbicacion, usuario, clave, saldo } = req.body;

    let sql = 'INSERT INTO titulares(nombre, apellido, dni, email, fecha_nacimiento, provinciaUbicacion, usuario, clave, saldo) VALUES (?,?,?,?,?,?,?,?,?)';
    var valores = [nombre, apellido, dni, email, fecha_nacimiento, provinciaUbicacion, usuario, clave, saldo];
    console.log(valores);

    mysqlConnection.query(sql, valores, (err, rows, fields) => {
        if (!err) {
            res.json({ ok: true });
        } else {
            console.log(err);
        }
    });
});



// Update un titular
router.put('/titulares/dni/:dni', urlencodedParser, (request, response) => {
    const dni = request.params.dni;
    const { saldo } = request.body;
    console.log(dni);
    console.log(saldo);
    /* response.json({
        dni: dni,
        saldo: saldo
    }); */
    let sql = 'UPDATE titulares SET saldo=' + saldo + ' WHERE dni=' + dni;
    mysqlConnection.query(sql, saldo, (err, rows, fields) => {
        if (!err) {
            response.json({ ok: true });
        } else {
            console.log(err);
        }
    });

});

module.exports = router;