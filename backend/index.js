const express = require('express');
const ID = require("nodejs-unique-numeric-id-generator")
const cors = require('cors');
require('./DB/Config');
const router=require('./routes/services_routes')
const nodeCron = require('node-cron');

const Services = require("./DB/Services");
const { default: mongoose } = require('mongoose');

const app = express(); 


//middleware
app.use(express.json());
app.use(cors());

const db=mongoose.connection
db.on('error',()=>console.log('connection not done'))
db.once('open',()=>console.log('connection done'))

app.use('/',router)
const job = nodeCron.schedule("30 5 2 * * *", async function() {
    

    var ndate =new Date()
const fdate=`${ndate.getUTCFullYear()}-${ndate.getUTCMonth()}-${ndate.getUTCDate()} 14:48 UTC`
var today=new Date(fdate)
console.log( typeof today.toISOString().slice(0,10))
const date1=today.toISOString().slice(0,10)

    let result = await model.updateMany({ },
        {
          $push: { date: {date:date1} },
        },
   )
   let result2 =   await model.updateMany({},
    [{$set:{"time.current_time":"$time.start_time"}}]
    
    )
  
      res.status(201).send(result2);
  }, 
  { scheduled: true, timezone: 'Asia/Bangkok' }
  );

// var d = new Date(Date.now());
// d.toString() 
// ID.generate(new Date().toJSON());
// /console.log("message server running succesfully",Date.now().toLocaleString())
// console.log("message server running succesfully",ID.generate(new Date().toJSON()))
// console.log("message server running suuuuuuuuuuuuuuuuuuuccesfully",ID.generate(new Date().toJSON()))

app.listen(5000,()=> console.log("serverstarted"));
