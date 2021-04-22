
const express = require('express'),
app = express(),
passport = require('passport'),
port = process.env.PORT || 80,
cors = require('cors'),
cookie = require('cookie')

const bcrypt = require('bcrypt')


const db = require('./database.js')
let users = db.users

require('./passport.js')

const router = require('express').Router(),
jwt = require('jsonwebtoken')

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// router.use(cors())
router.use(express.json())
router.use(express.urlencoded({ extended: false }))


router.post('/login', (req, res, next) => {
passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('Login: ', req.body, user, err, info)
    if (err) return next(err)
    if (user) {
        const token = jwt.sign(user, db.SECRET, {
            expiresIn: '7d'
        })
        // req.cookie.token = token
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
        );
        res.statusCode = 200
        return res.json({ user, token })
    } else
        return res.status(422).json(info)
})(req, res, next)
})

router.get('/logout', (req, res) => { 
res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: -1,
        sameSite: "strict",
        path: "/",
    })
);
res.statusCode = 200
return res.json({ message: 'Logout successful' })
})

// router.get('/foo', (req, res, next) => {
//     res.send('Foo');
// })

router.get('/foo',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send('Foo')
});

/* GET user profile. */
router.get('/profile',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
    res.send(req.user)
});

router.post('/register',
async (req, res) => {
    try {
        const SALT_ROUND = 10
        const { username, email, password } = req.body 
        if (!username || !email || !password)
            return res.json( {message: "Cannot register with empty string"})
        if (db.checkExistingUser(username) !== db.NOT_FOUND)
            return res.json({ message: "Duplicated user" })

        let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
        hash = await bcrypt.hash(password, SALT_ROUND)
        users.users.push({ id, username, password: hash, email })
        res.status(200).json({ message: "Register success" })
    } catch {
        res.status(422).json({ message: "Cannot register" })
    }
})

router.get('/alluser', (req,res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
res.send('Respond without authentication');
});
let herolists = {
    list: [
      { "id": 1, "name": "aaa","status": "rrr","rank": "S" ,"number": "1"},
      { "id": 2, "name": "bbb","status": "aaaa","rank": "S" ,"number": "2"}]
  }


router
  .route("/herolists")
  .get((req, res) => {
    res.send(herolists);
  })
  .post((req, res) => {
    console.log(req.body);
    let newherolist = {};
    newherolist.id = herolists.list.length ? herolists.list[herolists.list.length - 1].id + 1 : 1;
    newherolist.name = req.body.name;
    newherolist.status= req.body.status;
    newherolist.rank = req.body.rank;
    newherolist.number= req.body.number;
    newherolist.imgeurl= req.body.imgeurl;
    herolists = { list: [...herolists.list, newherolist] };
    res.json(herolists);
  });

router
  .route("/herolists/:herolist")
  .get((req, res) => {
    let id = herolist.list.findIndex((item) => +item.id == +req.params.herolist)
    res.json(herolists.list[id]);
  })
  .put((req, res) => {
    let id = herolists.list.findIndex((item) => item.id == +req.params.herolist);
    herolists.list[id].name = req.body.name;
    herolists.list[id].status = req.body.status;
    herolists.list[id].rank = req.body.rank;
    herolists.list[id].number = req.body.number;
    herolists.list[id].imgeurl = req.body.imgeurl;
    res.json(herolists.list);
  })
  .delete((req, res) => {
    herolists.list = herolists.list.filter((item) => +item.id !== +req.params.herolist);
    res.json(herolists.list);
  });


router.route("/purchase/:herolist")
.post((req,res) => {
  let id = herolists.list.findIndex((item) => +item.id == +req.params.herolist)
  if (id == -1) {
    res.json({message: "herolist not found"})
  }
  else {
    herolists.list = herolists.list.filter((item) => +item.id !== +req.params.herolist);
    res.json(herolists.list);
  }
})
// Error Handler
app.use((err, req, res, next) => {
let statusCode = err.status || 500
res.status(statusCode);
res.json({
    error: {
        status: statusCode,
        message: err.message,
    }
});
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

