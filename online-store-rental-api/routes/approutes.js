'use strict';
module.exports = function(app) {
  var movies = require('../controller/appController');
  var users = require('../controller/userController');

  // movies Routes
  app.route('/movies')
    .get(movies.read_a_task);
    // .post(todoList.create_a_task);

    // user Routes
  app.route('/users/register')
  .post(users.resigter_user);

  app.route('/users/authenticate')
  .post(users.authenticate_user);

}