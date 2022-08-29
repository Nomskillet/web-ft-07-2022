const express = require('express');
const app = express();
const cookiesSession = require('cookie-session'); //persist data accross different routes


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use(cookiesSession({
    name: 'session',
    keys: 'jhclasjhdlskj',
    maxAge: 14 * 24 * 60 * 60 * 1000
}))


let users = [

    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 
]



app.get('/', (req, res)=>{
    res.render('index')
})

app.all('/admin/*', auth)

app.get('/admin/dashboard', (req, res)=>{
    res.send('dashboard')
})
app.get('/admin/users', (req, res)=>{
    res.render('users')
})
app.get('/admin/stats', (req, res)=>{
    res.render('stats')
})
app.get('/admin/metrics', (req, res)=>{
    res.render('metrics')
})

app.post('/login', (req, res)=>{

    //username, password

    let{userID, password} = req.body //scrape info off of header from form submission
    //check database for correct username, pwd
    // re-encryptinh the password check to see if hashes match

    let user = users.find( userRecord =>{
        return userRecord.username == userID && userRecord.password == password
    })

    //place users id on the session

    if(user){ //object was returned into user variable and a mtch was found
        // place the user id on the session

        req.session.isAuthenticated = true;
        res.redirect('/protected')

    }

    else{
        //no user found
        // redirect to home page

        res.redirect('/')
    }

})

app.get('/protected', auth, (req, res)=>{
    res.send('protected')

})


app.get('/regular', (req, res)=>{
    res.send('hello there');
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
        res.redirect('/') //redirect user back to login
    }
}









app.listen(3000, ()=>{
    console.log('listening to port 3000');
})