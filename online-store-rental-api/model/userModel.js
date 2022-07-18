'user strict';

//User object constructor
var User = function(user){
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.username = user.username;
    this.password = user.password;
    this.type= "member";
}

User.getUserByName = function getUserByName(username, result) {
    db.query("Select * from USER where username = ? ", username, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        });   
};

User.RegisterUser = function createUser(newUser, result) {  

    db.query("INSERT INTO USER set ?", newUser, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

module.exports= User;