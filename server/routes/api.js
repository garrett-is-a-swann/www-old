const express = require('express');
const router = express.Router();

const session = require('client-sessions');
router.use(session({
    cookieName: 'session',
    secret: 't0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsY',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

const fs = require('fs');

var pgconf = fs.readFileSync('pg.conf', 'ascii');

const { Pool,Client } = require('pg')
const pool = new Pool({
    connectionString: 'postgresql://admin:secr3tp5wd@localhost:5432/core'
})


// Crypto
const crypto = require('crypto');
const hashconf = {
    hashBytes: 32,
    saltBytes: 16,
    iterations: 872700
};

function hashPassword(password, callback) {
  // generate a salt for pbkdf2
  crypto.randomBytes(hashconf.saltBytes, function(err, salt) {
    if (err) {
      return callback(err);
    }
    console.log(salt);

    crypto.pbkdf2(password, salt, hashconf.iterations, hashconf.hashBytes, 'sha512', (err, hash) => {

      if (err) {
        return callback(err);
      }

      var combined = [hash, salt];


      callback(null, combined);
    });
  });
}

function verifyPassword(password, combined, callback) {
  crypto.pbkdf2(password, Buffer(combined[1],'hex'), hashconf.iterations, hashconf.hashBytes, 'sha512', (err, verify) => {
    if (err) {
      return callback(err, false);
    }
    console.log(combined);
    console.log(verify.toString('hex'))
       
    callback(null, verify.toString('hex') == combined[0]);
  });
}


/* API DESCRIPTION *\

    URL: /
    Function:
    Action:

\*                 */

// GET api listing 
router.get('/', (req, res) => {
    res.send('api works');
});

router.route('/login').all((req,res,next)=> {
        next();
    }) .get((req, res, next) => {
        next(new Error('Not implemented'));
    }) .post((req, res, next) => {
        console.log(req.session.user)
        pool.query('Select password_hash, password_salt from verb_login where username = $1', [req.body.username], (e, resp) => {
            console.log(resp);
            if(e) {
                console.log(e);
            }
            else {
                if(!resp.rows.length) {
                    res.status(404).send('User not found');
                    return;
                }
                verifyPassword(req.body.password, [resp.rows[0].password_hash, resp.rows[0].password_salt], (e, s) => {
                    if(e) {
                        console.log(e)
                    }
                    else {
                        console.log(s);
                        if(s) {
                            res.status(200).send('Authenticated')
                        }
                        else {
                            res.status(400).send('Incorrect Password')
                        }
                    }
                });

            }
        })
    })
    
//Register
router.route('/register')
    .all((req,res,next) => {
        next();
    })
    .get((req, res, next) => {
        next(new Error('Not implemented'));
    })
    .post((req, res, next) => {
        const values = [];

        const errors = {};
        hashPassword(req.body.password, (err, hashed)=> {
            if(err) {
                return;
            }
            console.log(hashed);


            for (each in req.body) {
                values.push(req.body[each]);
            }
            console.log(values);

            pool.query('Select * from noun_user where email = $1', [req.body.email], (e, resp) => {
                if(e) {
                    console.log(e);
                }
                else {
                    if( resp.rows.length ) {
                        errors['email']='Email has been taken.';
                    }
                    console.log(resp)
                }
                pool.query('Select * from verb_login where username = $1', [req.body.username], (e, resp) => {
                    if(e) {
                        console.log(e);
                    }
                    else {
                        if( resp.rows.length ) {
                            errors['username']='Username is already in use.';
                        }
                        console.log(resp)
                    }

                    if(Object.keys(errors).length) {
                        res.send(errors);
                    }
                    else {
                        pool.query('INSERT INTO noun_user (email, date_created)'
                                +' VALUES ($1, current_timestamp) RETURNING id', [req.body.email]).then(resp => {
                            pool.query('INSERT INTO verb_login (username, password_hash, password_salt, user_id, permission, date_created)'
                                    +' VALUES ($1, $2, $3, $4, $5, current_timestamp) RETURNING *', [req.body.username, hashed[0].toString('hex'), hashed[1].toString('hex'), resp.rows[0].id, 10 ]).then(resp => {
                                console.log(resp);
                                req.session.user = req.body.username;
                                console.log(req.session.user, ' has logged in');
                                res.status(201).send('Created')
                            }).catch(e => {
                                console.log(e);
                            });
                        }).catch(e => {
                            console.log(e);
                        });
                    }
                })
            })
        })
    })


module.exports = router;
