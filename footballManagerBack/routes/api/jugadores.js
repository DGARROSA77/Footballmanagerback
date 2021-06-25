const router = require('express').Router();
const { getAll, getById, getByEdad, update, create, getByClub } = require('../../models/jugadores.model');


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

router.get('/club/:clubId', async (req, res) => {
    const jugadores = await getByClub(req.params.clubId);
    res.json(jugadores);
});




module.exports = router;