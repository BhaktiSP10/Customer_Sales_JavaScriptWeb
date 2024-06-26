const db = require('../config/db.manager');
exports.getAllUsers = function (req, res) {
    const UsersProduct = db.getUsersProducts().then(results=>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        }); // send all the data
    });
}

exports.getUsersByID = function( req, res){
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.createNewUsers = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get (attribute)
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.patchUsersById = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteUsersByID = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    res.status(200).json({
        status: 'no implemented'
    });
}