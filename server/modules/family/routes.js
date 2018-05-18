const appRouter=require('express').Router();
const appControllers=require('./controllers');



appRouter.route('/api/signup').post((req,res)=>{
	// to retreive all family members
	// console.log("request received",req.body)
	appControllers.signupUser(req,res);

})
//this for jozaa to check the router is wotk or not
appRouter.route('/').get((req,res)=>{
  // to retreive all family members
  console.log("request received from profile 2222: ",req.body)
  var t={b:'YOU ARE CONECTED TO THE SERVER :)'}
  res.send(t);

})

appRouter.route('/api/login').post((req,res)=>{
	console.log('inside')
    //to check the password for the user and start the session 
    appControllers.signinUser(req,res);

  });

appRouter.route('/getkids').post((req,res)=>{
  //console.log("HHHHHHHHHHHHHHH:",req.body.user)
  var email=req.body.user
  // console.log("KIDSSSSS",req.body)
  appControllers.getKidsNames(email,res);
  //res.send(email)

  //res.send('kids tasks')
});

appRouter.route('/getkidsId').post((req,res)=>{
  //console.log("HHHHHHHHHHHHHHH:",req.body.user)
  var id=req.body.id
  // to retreive all family members
 // console.log("KIDSSSSS",id,typeof id)
 appControllers.getKidsId(id,res);
  //res.send({id:id})

  //res.send('kids tasks')
});


module.exports=appRouter;
