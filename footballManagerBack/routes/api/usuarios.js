const { create, getByEmail, getById, getByUsername } = require('../../models/usuario.model');

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
// const { checkToken } = require('../middlewares');

router.post('/registro', [
], async (req, res) => {
    // Validación datos entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Comprobar si el email ya está registrado
    // El resultado es NULL si no existe el email registrado
    // El resultado es el USUARIO si existe el email registrado
    const usuario = await getByEmail(req.body.email);
    if (usuario) {
        return res.json({ error: 'El email ya se encuentra registrado' });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    create(req.body)
        .then(result => res.json(result))
        .catch(error => console.log(error));
});

router.post('/login', async (req, res) => {
    console.log(req.body.username);
    // 1 - Compruebo si existe el username
    const usuario = await getByUsername(req.body.username);
    if (!usuario) {
        return res.json({ error: 'error en username y/o password 1' });
    }

    // 2 - Compruebo si las password coinciden
    const iguales = bcrypt.compareSync(req.body.password, usuario.password);
    if (iguales) {
        res.json({ success: 'Todo a tope!', token: createToken(usuario) });
    } else {
        res.json({ error: 'error en username y/o password 2' });
    }

});


// Devuelve un JSON con los datos del usuario Activo
router.get('/perfil', (req, res) => {
    res.json(req.user);
});

function createToken(pUsuario) {
    const obj = {
        usuario_id: pUsuario.id,
        caducidad: dayjs().add(7, 'days').unix()
    }
    return jwt.sign(obj, 'colorin colorado...');
}

module.exports = router;