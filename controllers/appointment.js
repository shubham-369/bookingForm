const appointment = require('../models/appointment');

exports.submit = (req, res) => {
    const {name, email, phone} = req.body;
    appointment.create({
        name: name,
        email: email,
        phone: phone
    })
    .then(() => {
        res.redirect('/');
    })
    .catch((error) => {
        console.log(`error while inserting data : ${error}`);
        res.status(500).json({error:'Internal server error'});
    })
}

exports.fetchData = (req, res) => {
    appointment.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error while fetching data : ', error);
        res.status(500).json({error: 'Internal server error'});
    })
}

exports.delete = (req, res) => {
    const id = req.params.deleteID;
    appointment.destroy({where: {id:id}})
        .then(() => {
            res.redirect('/index.html');
        })
        .catch((error) => {
            console.log('error while deleting data : ', error);
            res.status(500).json({error:'Internal server error'});
        })
}
exports.edit = (req, res) => {
    const id = req.params.editID;
    appointment.findByPk(id)
    .then((data) => {
        res.redirect('/index.html');
    })
    .catch((error) => {
        console.log('error while updating data : ', error);
        res.status(500).json({error:'Internal server error'});
    })
}
