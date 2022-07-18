'use strict';

var Task = require('../model/appModel.js');


exports.read_a_task = function(req, res) {
    Task.getTaskById('abc', function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };