const appointment = require('../models/appointment');

exports.submit = (req, res, next) => {
    const {id, name, email, phone} = req.body;
    if(id){
        appointment.findByPk(id)
        .then((data) => {
            data.name = name;
            data.email = email;
            data.phone = phone;
            data.save();
        })
        .then(() => res.redirect('/form.html'))
        .catch((error) => {
            console.log(`error while inserting data by id : ${error}`);
            res.status(500).json({error:'Internal server error'});
        })
    }else{
        appointment.create({
            name: name,
            email: email,
            phone: phone
        })
        .then(() => {
            res.redirect('/form.html');
        })
        .catch((error) => {
            console.log(`error while inserting data : ${error}`);
            res.status(500).json({error:'Internal server error'});
        })
    }
}

exports.fetchData = (req, res, next) => {
    appointment.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch((error) => {
        console.log('error while fetching data : ', error);
        res.status(500).json({error: 'Internal server error'});
    })
}

exports.delete = (req, res, next) => {
    const id = req.params.deleteID;
    appointment.destroy({where: {id:id}})
        .then(() => {
            res.redirect('/form.html');
        })
        .catch((error) => {
            console.log('error while deleting data : ', error);
            res.status(500).json({error:'Internal server error'});
        })
}
