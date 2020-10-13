const {Plato} = require('../database/dbconfig');
const router = require('express').Router();

router.route('/')
.get((req, res) => {
    res.render('login');
})
.post(async(req, res) => {
await Plato.create(req.body);
    console.log("datos agregados correctamente");
    res.redirect('/login');
});


module.exports = router;