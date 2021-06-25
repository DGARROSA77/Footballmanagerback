const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiJugadoresRouter = require('./api/jugadores');
const apiClubsRouter = require('./api/clubs');

router.use('/usuarios', apiUsuariosRouter);
router.use('/jugadores', apiJugadoresRouter);
router.use('/clubs', apiJugadoresRouter);

module.exports = router;