const router = require('express').Router();
const { getAll, getById, update, create, getByEdad, getByClub, getIdByClub } = require('../models/jugadores.model');

// GET http://localhost:3000/jugadores
router.get('/', async (req, res) => {

    const page = parseInt(req.query.page) || 1;

    // recuperar todos los jugadores
    const jugadores = await getAll(10, page);

    // renderizar la vista list.pug pasándole los jugadores
    res.render('jugadores/list', {
        arrJugadores: jugadores,
        page
    });
});

// POST http://localhost:3000/jugadores/create
router.post('/create', async (req, res) => {
    try {
        const result = await create(req.body);
        res.redirect('/jugadores');
    } catch (error) {
        console.log(error);
    }
})

// get http://localhost:3000/jugadores/jugadorEdad
router.get('/jugadorEdad', async (req, res) => {
    const jugador = await getByEdad(req, params.pEdad);
    res.render('jugador/edad', { jugador });
});


// get http://localhost:3000/jugadores/club
router.get('/club', async (req, res) => {

    const pIdClub = parseInt(req.query.pIdClub) || 1;


    const jugadores = await getIdByClub(pIdClub);

    // renderizar la vista list.pug pasándole los jugadores
    res.render('jugadores/list', {
        arrJugadores: jugadores,
        page
    });
});

module.exports = router;