const express=require("express");
const cors=require("cors");
const mysql=require("mysql");

const app=express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>{
    const sql="SELECT * FROM ems";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/signup',(req,res)=>{
    const sql="INSERT INTO signup(`username`,`email`,`password`) VALUES (?)";
    const values=[
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/create',(req,res)=>{
    const sql="INSERT INTO ems(`Ename`,`Department`,`Designation`,`Salary`,`Address`,`Dob`,`Age`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.department,
        req.body.designation,
        req.body.salary,
        req.body.address,
        req.body.dob,
        req.body.age
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/employee/:id',(req,res)=>{
    const sql="DELETE FROM ems where ID=?";
    const id=req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

// app.put('/update/:id',(req,res)=>{
//     const sql="UPDATE EMS SET `Ename`=?,`Department`=?,`Designation`=?,`Salary`=?,`Address`=?,`Dob`=?,`Age`=?";
//     const values=[
//         req.body.name,
//         req.body.department,
//         req.body.designation,
//         req.body.salary,
//         req.body.address,
//         req.body.dob,
//         req.body.age
//     ]
//     const id=req.params.id;

//     db.query(sql,[...values,id],(err,data)=>{
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })

app.listen(8081, ()=>{
    console.log("listening");
})
