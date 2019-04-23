// app.js
const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path    = require('path')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



//app.use(myFakeMiddleware)
// ...
// function isLoggedIn(){
//   console.log("isLoggedIn was called!");
//   return false
//   next
// }



// app.post('/save', isLoggedIn, (req,res,next)=>{

//     if(!isLoggedIn){
//         res.json({loggedIn:false})
//     }
//     console.log('lets seee req.body ',req.body)
//     res.json(req.body)

// })

function anyFunctionsInHere(){
    console.log('heyyy')
    return 
}


app.get('/', (req,res,next)=>{


    res.render('index')
})




app.get('/allUsers/:country/:city/:weather', (req,res,next)=>{
    res.send(req.query)
})


app.post('/signUp', (req,res,next)=>{
    res.send(req.body)
})








app.get('/willywonkafactory/whereevermyimageationmaylead', (req,res,next)=>{
    res.json(req.query)
})





app.get('/using-query', function (req, res, next) {
    res.json(req.query)
})


app.get('/using-params/:favAnimals', function (req, res, next) {
    res.send(req.params.favAnimals)
  //res.send("yet another one")
  //res.render('index')
  //res.json({cool:true})
  //res.status(200).json({whatever:'success'})
})

app.listen(3000, () => console.log('App listening on port 3000!'))