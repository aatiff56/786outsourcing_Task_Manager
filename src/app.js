const express = require("express");
const path = require("path");
const request = require('request')
const hbs = require('hbs')
const bodyparser = require('body-parser')
const { Client } = require('pg')
const session = require('express-session')


// Controles 
const users = require('../controllers/users/users')


// routes 

const route_users = require('../routes/users')
const route_tasks = require('../routes/tasks')



//require('')
const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
const pageDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../views')
const viewsPartials = path.join(__dirname, '../partials')


app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(viewsPartials)
app.use(express.static(pageDirectory))
app.use(session({
    secret: 'key1',
    resave: false,
    saveUninitialized:false,
    cookie: {
 
        // Session expires after 1 min of inactivity.
        expires: ((60 * 1000) * 60 )
    }
}))

app.use(route_users);
app.use(route_tasks);


// app.get('/', (req, res) => {

//     console.log('index page loaded')

//     res.render('index', {

//         title: 'This is dashboard',
//         description: 'Contact Us',
//         createdBy: 'Usman Raza'

//     })

// })
// app.get('/login', (req, res) => {

//     console.log('login page loaded')

//     res.render('login', {

//         title: 'Login',
//         description: 'Contact Us',
//         createdBy: 'Usman Raza'

//     })

// })

// app.get('/login', (req, res) => {

//     console.log('login page loaded')

//     res.render('login', {

//         title: 'Login',
//         description: 'Contact Us',
//         createdBy: 'Usman Raza'

//     })

// })



// app.get('/users', (req, res) => {

//     console.log('Users page loaded')

//     res.render('users', {

//         title: 'Users',
//         description: 'Contact Us',
//         createdBy: 'Usman Raza'



//     })

// })

// app.get('/users', users.getlist);
// app.get('/login', users.login);
// app.post('/auth', users.login.auth);

// app.set(express.json())
// app.post('/users/:id', (req, res) => {

//     res.send(req.body);
// })


// app.post('/login', (req, res) => {

//     console.log('login page loaded')

//     res.redirect('/');
// })

app.get('*', (req, res) => {

    res.render('404', {
        title: '404 Page',
        description: 'This Page doesn\'t exist',
        createdBy: 'Usman Raza'
    })
})

// app.get('/weather', (req, res) => {

//     console.log('index page loaded')
//     res.render('index', {

//         title: '',
//         description: 'Weather',
//         createdBy: 'Usman Raza'

//     })
//     // res.send('<h1>Don\'t give up </h1>')


//     // if (!req.query.weather)
//     //     res.render('index', {

//     //         title: 'You must provide city name',
//     //         description: 'Weather',
//     //         createdBy: 'Usman Raza'

//     //     })
//     // else
//     //     getWeatherJSON(req.query.weather, (error, response) => {

//     //         if (response) {

//     //             const title = 'Current Temperature is ' + JSON.parse(response.body).current.temperature
//     //                 + ' at ' + JSON.parse(response.body).current.observation_time
//     //                 + ' in ' + JSON.parse(response.body).location.name


//     //             res.render('index', {

//     //                 title: title,
//     //                 description: 'Weather',
//     //                 createdBy: 'Usman Raza'

//     //             })
//     //             console.log(
//     //                 title
//     //             )
//     //         }
//     //         else
//     //             console.log('there\'s no response');

//     //     }
//     //     )

// })

// app.get('/pg', (req, res) => {

//     console.log('Postgre Page')


//    const pg_client = new Client({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'postgres',
//         password: '123',
//         port: 5432,
//       })

//       pg_client.connect()

//       const response = pg_client.query('select * from db_test.tb1');

//       res.render('postgre', {

//         title: response.rows[0].id,
//         description: ress,
//         createdBy: 'Usman Raza'
//         })

//     //   pg_client.query('select * from db_test.tb1', (errr, ress) => {
//     //     //console.log(errr ? ress.stack : ress.rows[0].message) // Hello World!


//     //     pg_client.end()
//     // })


//     // res.send('<h1>Don\'t give up </h1>')


//     // if (!req.query.weather)
//     //     res.render('index', {

//     //         title: 'You must provide city name',
//     //         description: 'Weather',
//     //         createdBy: 'Usman Raza'

//     //     })
//     // else
//     //     getWeatherJSON(req.query.weather, (error, response) => {

//     //         if (response) {

//     //             const title = 'Current Temperature is ' + JSON.parse(response.body).current.temperature
//     //                 + ' at ' + JSON.parse(response.body).current.observation_time
//     //                 + ' in ' + JSON.parse(response.body).location.name


//     //             res.render('index', {

//     //                 title: title,
//     //                 description: 'Weather',
//     //                 createdBy: 'Usman Raza'

//     //             })
//     //             console.log(
//     //                 title
//     //             )
//     //         }
//     //         else
//     //             console.log('there\'s no response');

//     //     }
//     //     )

// })

// app.post('/weather', (req, res) => {

//     console.log(req.body)

//     // res.send('<h1>Don\'t give up </h1>')


//     if (!req.body.weather)
//         res.render('index', {

//             title: 'You must provide city name',
//             description: 'Weather',
//             createdBy: 'Usman Raza'

//         })
//     else
//         getWeatherJSON(req.body.weather, (error, response) => {

//             if (response) {

//                 const title = 'Current Temperature is ' + JSON.parse(response.body).current.temperature
//                     + ' at ' + JSON.parse(response.body).current.observation_time
//                     + ' in ' + JSON.parse(response.body).location.name


//                 res.render('index', {

//                     title: title,
//                     description: 'Weather',
//                     createdBy: 'Usman Raza'

//                 })
//                 console.log(
//                     title
//                 )
//             }
//             else
//                 console.log('there\'s no response');

//         }
//         )

// })

// app.get('/aboutus', (req, res) => {

//     console.log('index page loaded')

//     res.render('aboutus', {

//         title: 'This is about us page',
//         description: 'About Us',
//         createdBy: 'Usman Raza'

//     })

// })

// app.get('/contactus', (req, res) => {

//     console.log('index page loaded')

//     res.render('contactus', {

//         title: 'This is contact us page',
//         description: 'Contact Us',
//         createdBy: 'Usman Raza'

//     })

// })

// app.get('*', (req, res) => {

//     res.render('404', {

//         title: '404 Page',
//         description: 'This Page doesn\'t exist',
//         createdBy: 'Usman Raza'

//     })

// })


// const getWeatherJSON = (address, callback) => {

//     let url = 'http://api.weatherstack.com/current?access_key=4416edc54d230b219492a3420b1e2480&query=' + encodeURIComponent(address)
//     request(url, (error, response) => {

//         if (error)
//             callback('There\'s no internet connection', undefined)
//         else
//             callback('', response)

//     }
//     )

// }

// app.get('/listen', (req, res) => {

//     res.send('<h1>Again! Don\'t give up </h1>')

// })


app.listen(8000, () => {
    console.log('server is up at port:3000');
})