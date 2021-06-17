const express = require('express');
const router = express.Router();

// Mostrar los usuarios graficamente
router.get('/', (req, res) => {
  res.send('Peticion /users')
});

// mostrar desde el formulario un nuevo usuario
router.get('/new', (req, res) => {
  res.send('Peticion /users/new')
});

// crear un nuevo usuario en la base de datos
router.post('/create', (req, res) => {
  res.send('Peticion /users/create')
});

// mostrar el formulario de edicion del usuario
router.get('/edit', (req, res) => {
  res.send('Peticion /users/edit')
});

// añadir el usuario editado.
router.post('/update', (req, res) => {
  res.send('Peticion /users/update')
});

// borrar el usuario
router.get('/delete', (req, res) => {
  res.send('Peticion /users/delete')
});

module.exports = router;
