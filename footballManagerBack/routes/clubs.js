const router = require('express').Router();
const { getAll } = require('../models/clubs.model');

// GET http://localhost:3000/clubs
router.get('/', async (req, res) => {

    const clubs = await getAll();
    res.render('clubs/list', {
        arrClubs: clubs,

    });
});


module.exports = router;