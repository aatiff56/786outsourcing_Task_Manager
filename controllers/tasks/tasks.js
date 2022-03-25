const async = require('hbs/lib/async');
const db = require('../../generics/db/db.js')

exports.getlist = async (req, body_res) => {

    // if (req.session.already_logged === 'false' || req.session.already_logged === undefined) {
    //     body_res.redirect('/')

    // }
    // else {

        body_res.render('tasks', {
            title: 'This is tasks page',
            users_list: 'res'
        })

        // await db.select().from('users').then((res) => {

        //     body_res.render('users', {
        //         title: 'Users',
        //         users_list: res
        //     })

        //     console.log(res)
        //     //this.response = res
        // })
    // }
}
exports.update = async (req, page_res) => {

    page_res.redirect('/users')

}


exports.delete = async (req, page_res) => {

    page_res.redirect('/users')
    const id = req.params.id;

    const filter = { id: id }
    // const { email, password } = req.body
    // const filter = { email: email, password: password }
    await db('users').where(filter).del().then((res) => {

        page_res.redirect('/users')

        console.log('delete')
    }).catch((err) => {

        console.log(err);

    })

    // function (count) {
    //     console.log(count);
    //   }

}

exports.login = (req, res) => {


    console.log('Controller: Login Page Loaded');
        res.render('login_update', {
            title: 'this is login page'
        })

    //req.session.already_logged = 'true';
    //console.log(req.session.already_logged);

    // if (req.session.already_logged === 'true') {
    //     res.redirect('/users')

    // }
    // else {
        // console.log('Controller: Login Page Loaded');
        // res.render('login', {
        //     title: req.session.already_logged
        // })
    // }

}
exports.addtasks = (req, res) => {

    //req.session.already_logged = 'true';
    //console.log(req.session.already_logged);

    // if (req.session.already_logged === 'true') {
    //     res.redirect('/users')

    // }
    // else {
        console.log('Controller: Login Page Loaded');
        res.render('addtasks', {
            title: 'this is add tasks page'
        })
    // }

}
exports.logout = (req, res) => {

    //req.session.already_logged = 'true';
    req.session.already_logged = 'false';
    res.redirect('/')
}
exports.login.auth = async (req, page_res) => {


    const { email, password } = req.body
    const filter = { email: email, password: password }
    await db.select('email', 'password').from('users').where(filter).then((res) => {

        if (res.length > 0) {
            req.session.already_logged = 'true'
            page_res.redirect('/users')
        }
        else page_res.render('login', {
            title: 'Wrong email or password'
        })

        console.log(res)
        //this.response = res
    })
    console.log(email);

}
