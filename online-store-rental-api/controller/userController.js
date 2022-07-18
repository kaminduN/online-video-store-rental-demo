'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config.json');
var User = require('../model/userModel');


exports.get_user = function(req, res) {
    User.getUserByName(req.body.username, function(err, task) {
      if (err){
        res.send(err);
      }
      res.json(task);
    });
 };

exports.authenticate_user = function (req, res) {
    
    User.getUserByName(req.body.username, function (err, user) {
        if (err) {
            res.send(err);
        }
        console.log(req.body);
        console.log(user[0])
        console.log("Authenticating " + req.body.username);
        if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
            console.log("in innnnnn")
            const { password, ...userWithoutHash } = user[0];
            const token = jwt.sign({ sub: user[0].id }, config.secret);
            res.json({
                ...userWithoutHash,
                token
            });

        } else {
            res.status(400).json({ message: 'Username or password is incorrect' })
        }

    });
};

exports.resigter_user = function (req, res) {
    var new_user = new User(req.body);
    // console.log(new_user)
    //handles null error 
    if (!new_user.username || !new_user.password) {

        res.status(400).send({ error: true, message: 'Please provide username/password' });
    }
    else {

        // hash password
        new_user.password = bcrypt.hashSync(new_user.password, 10);
        
        User.RegisterUser(new_user, function (err, user) {

            if (err)
                res.status(400).send(err);
            res.json(user);
        });
    }
};