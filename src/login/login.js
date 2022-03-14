const db = require('../../generics/db/db.js')


// const  knex  = require("knex")({
//     client:'pg',
//     Connection:'postgres://postgres:123@localhost:5432/task_manager_786outsourcing'
// })
// const db = require("knex")({
//     client: "pg",
//     connection: {
//       host: "localhost",
//       user: "postgres",
//       password: "123",
//       database: "task_manager",
//       port:5432
//     }
//   });


// db.from('users').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         db.destroy();
//     });

const login = async (email, password, type) => {

    const response = {};

    if (type === 'add'){
     const id =  db('users')
     .insert({
            email:email, password:password

        }).returning('id')
        //console.log(id)
        return id;
    }
    else
    {
    //   const response =  db.select('email', 'password').from('users')
    //   return response;

        const response= await db.select('email', 'password').from('users').then((res) => {
    
            console.log(res)
            //this.response = res
        })

        console.log('get');

    }
        
}

const users =  login('user 1', 'password 1', 'get')
console.log('users');

//login('user 1', 'password 1', 'select')

