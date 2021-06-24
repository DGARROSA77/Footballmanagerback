const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiJugadoresRouter = require('./api/jugadores');

router.use('/usuarios', apiUsuariosRouter);
router.use('/jugadores', apiJugadoresRouter);

module.exports = router;