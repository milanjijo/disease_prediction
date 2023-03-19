import express  from "express";

const router = express.Router();

const users =[
  {
    firstName : "John",
    lastName : "Doe",
    Age: 25
  },
  {
    firstName : "Johnny",
    lastName : "Depp",
    Age : 30
  }
]

router.get('/', (req,res)=>{
  console.log(users);

  res.send(users);
});

router.post('/',(req,res)=>{
  
  const user= req.body;
  users.push(user);
  console.log(req.body);
  res.send(users)
  
});

export default router;



