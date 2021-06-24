const router = require('express').Router();
const { getAll, getById, getByEdad, update, create } = require('../../models/jugadores.model');


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

module.exports = router;