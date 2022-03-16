const router = require('express').Router();
const { request } = require('express');
const { getAll, getById, getByEdad, update, create, getByClub, getIdByClub } = require('../../models/jugadores.model');


router.get('/', async (req, res) => {
    try {

        const limit = req.query.limit || 10;
        const page = req.query.page || 1;

        const rows = await getAll(parseInt(limit), parseInt(page));

        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'ERROR!!  ' });
    }

});


router.post('/', (req, res) => {
    create(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log(error);
        });
});


router.get('/jugadorEdad', async (req, res) => {
    const jugadores = await getByEdad(req.params.pEdad);
    res.json(jugadores);
});


router.get('/club', async (req, res) => {
    try {
        const pIdClub = req.query.idClub;


        const rows = await getIdByClub(parseInt(pIdClub));

        res.json(rows);
    } catch (err) {
        console.log(err);
        res.json({ error: 'ERROR!!  ' });
    }

});





module.exports = router;