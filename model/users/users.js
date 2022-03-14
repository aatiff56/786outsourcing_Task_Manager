const { getlist } = require('../../controllers/users/users')
const db = require('../../generics/db/db')

const getUsers = ()=> {

   const users =  db.select().from('users').then((res) => {
        console.log(res)
        return res;
    })



}
