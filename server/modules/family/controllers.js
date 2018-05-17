var models=require('./models');
var bcrypt = require('bcrypt');


// const session = require('express-session');

exports.signupUser = function(req, res) {
  var newUser =new models.User({
   username : req.body.user.username,  
   email :req.body.user.email,   
   password :req.body.user.password,   
   bdate :req.body.user.bdate,   
   role :req.body.user.role,   
   rank :req.body.user.rank,
   familyId :parseInt(req.body.user.familyId),
 });
  console.log(req.body.user.email)
  models.User.findOne({ email: req.body.user.email },function(err,found){

   if (!found ){

    bcrypt.hash(newUser.password, 10, function(err, hash) {
      newUser.password=hash;
      console.log(' newUser.password', hash)

      newUser.save(function(err,obj) {

       if(err){
        res.status(500).send({msg:"error"});

      }
      else{
        res.status(201).send({msg:"success signup"});

      }
      
    });

    })
  }

  else{
    res.status(201).send({msg:'choose another email'})
  }

})


  console.log(newUser);
}

exports.signinUser = function(req, res) {
 models.User.findOne({'username':req.body.user.username},function (err, data) {
  console.log('data',data)
  if(data===null){
    res.send({msg:"no account"})
  }

  else if(data !== null){
    bcrypt.compare(req.body.user.password, data.password, function(err, resCrypt) {
      if(!resCrypt){res.send({msg:"the password is not correct"})}
        else if(resCrypt){
          req.session._id=data._id;
          req.session.username=data.username;
          req.session.password=data.password;
          res.send({msg:"success"})

        }
      });

  }
});
};

exports.getKidsNames= function(req,res){
  console.log('REQ:',req)
  models.User.find({'email':req},function (err, data) {
    console.log('DB: ',data[0])
    res.send(data[0])
  });


//res.send(req)
  //console.log(req.body)
}
exports.getKidsId= function(req,res){
  console.log('REQ3:', req)
  models.User.find({'role':"kid"},function (err, data) {
    console.log('DB: ',data)
  //res.send(data[0])
});
};


