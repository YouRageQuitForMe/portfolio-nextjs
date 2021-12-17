const Project = require("../models/Project");

module.exports = projectFind = (req, res) => {

    const projectFound = Project.findOne({title: req.params.id}, (err, data) => {

        if (err) console.log(err);
        else res.send(data);
    });
}