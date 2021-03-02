import bcrypt from 'bcryptjs'

const users=[
{
    name:'Admin User',
    email:'Admin@example.com',
    password:bcrypt.hashSync('1234',10),
    isAdmin:true
},
{
    name:'John Doe',
    email:'John@example.com',
    password:bcrypt.hashSync('1234',10),
    
},
{
    name:'Jane Doe',
    email:'Jane@example.com',
    password:bcrypt.hashSync('1234',10),
  
},

]

export default users