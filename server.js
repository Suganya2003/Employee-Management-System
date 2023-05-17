const  express=require('express')
const app= express()
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.set("view engine","ejs")
app.use(express.static('views'))
const cors = require('cors');
app.use(cors());
const mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sugi@123",
    database: "new"

  });

app.get('/',(req,res)=>{
    res.render('first')
})

app.post('/addData',(req,res)=>{
    console.log(req.body.data)
    let con1 = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sugi@123",
      database: "new"
    
      });
    con1.connect(function(err) {
        if (err) throw err;
        console.log("Connected! in addDataExcel");
        var sql = "INSERT INTO users (ID,NAME,ADDRESS,DOB,GENDER,DEPARTMENT) VALUES ?";

        con1.query(sql,[req.body.data], function (err, result) {
          if (err) throw err;
          console.log("record inserted");
          return res.json({data:req.body.data})
          

        });
      });
      
})

app.get('/add_employee',(req,res)=>{
    res.render('Add_emp')
})

app.get('/delete_employee/:id',(req,res)=>{
    console.log(req.params.id)
    let con1 = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sugi@123",
      database: "new"
    
      });
    con1.connect(function(err) {
        if (err) throw err;
        console.log("Connected! in addDataExcel");
        var sql = `delete  FROM new.users where ID=${req.params.id}`;

        con1.query(sql, function (err, result) {
          if (err) throw err;
          console.log("record inserted");
          res.render('delete')
          

        });
      });

})

app.get('/edit_employee/:id',(req,res)=>{
    console.log(req.params.id)
    let con1 = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sugi@123",
      database: "new"
    
      });
    con1.connect(function(err) {
        if (err) throw err;
        console.log("Connected! in addDataExcel");
        var sql = `select * from users where ID=${req.params.id}`;

        con1.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result[0].ID);
          res.render('Edit_emp',{user:result[0]})
          

        });
      });

    
})
app.post('/edit_employee',(req,res)=>{
    console.log(req.body)
    let con1 = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sugi@123",
      database: "new"
    
      });


      con1.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE users SET NAME='${req.body.name}',ADDRESS='${req.body.address}',DOB='${req.body.dob}',DEPARTMENT='${req.body.department}',GENDER='${req.body.gender}' WHERE ID=${req.body.ID}`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
          res.render('sucess')
        });
      });

})


app.get('/get_employee',(req,res)=>{
    let con1 = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "sugi@123",
      database: "new"
    
      });
      con1.connect(function(err) {
        if (err) throw err;
        var sql ="select * from users";
        con.query(sql, function (err, result) {
          if (err) throw err;
         
          res.send(result)
        });
      });
})
app.listen('3233',()=>{
    console.log('sucess emp')
    
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
    
})