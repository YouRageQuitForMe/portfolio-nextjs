const express = require("express");
const router = express.Router();
const controller = require("../controllers/project");

router.get('/projects/:id', (req, res) => {
    projectFind(req, res);
})

module.exports = router;