const router = require('express').Router();
const { getAll } = require('../../models/clubs.model');


router.get('/', async (req, res) => {
    const clubs = await getAll();
    res.json(clubs);
})

module.exports = router;