
const express = require('express');
const app = express();
const cookieSession = require('cookie-session'); //persist data across different routes

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({ // req.session
    name: 'session', 
    keys: ['alskdj;lskdjslakjdlksad'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

let users = [

    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 
]

app.get('/', (req, res) => { 

    res.render('index')
})

app.all('/admin/*',  auth)

app.get('/admin/dashboard',  (req, res) => { 

    res.send('dashboard')
})

app.get('/admin/users', (req, res) => { 

    res.send('users')
})

app.get('/admin/stats', (req, res) => { 

    res.send('stats')
})

app.get('/admin/metrics', (req, res) => { 

    res.send('metrics')
})



app.post('/login', (req, res) => { 

    //username, password

    let {userID, password} = req.body; //scrapes info off of header from form submission

    //check db for correct username, pwd
    //re-encrypting the password  check to see if hasshes match 

    let user = users.find( userRecord =>{

        return userRecord.username == userID && userRecord.password == password
    })

    

    if(user){ //object was returned into user variable and a match was found
        //place the user's id on the session
        req.session.isAuthenticated = true;
        res.redirect('/protected')
    }
    else{ 
        //no user found 
        // redirect them to log back in
        res.redirect('/')
    }
})

app.get('/protected', auth, (req, res) => { 

    res.send('protected')
})


app.get('/regular', (req, res) => { 

    res.send('hey everyone')
 })

app.get('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/')
})


function auth(req, res, next){ //middleware function --gatekeeper

    if(req.session.isAuthenticated){
        next()
    }
    else{
        res.redirect('/') //redirect user back to login form
    }

}








app.listen(3000, () => console.log('Server Started'))