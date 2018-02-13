const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const config = require('../../configs/api-conf.json');
const dbconf = config.db.blog;

const sequelize = new Sequelize(dbconf.database, dbconf.username, dbconf.password, {
      // gimme postgres, please!
    dialect: 'postgres'
})


/* Models */
const User = sequelize.define('user_account', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
    ,first_name: Sequelize.TEXT
    ,last_name: Sequelize.TEXT
    ,email: { type: Sequelize.STRING, allowNull: false }
} , /*Configs*/ { freezeTableName:true, tableName: 'user_account', underscored: true, timestamps: true, created_at: true, updated_at: false } )

const Ulogin = sequelize.define('user_account_login', {
    //uid: { type: Sequelize.INTEGER, references: { model: User, key: 'id',  deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE } }
    username: { type: Sequelize.STRING, allowNull: false }
    ,password_salt: { type: Sequelize.STRING, allowNull: false }
    ,password_hash: { type: Sequelize.STRING, allowNull: false }
    ,permission: { type: Sequelize.INTEGER, allowNull: false }
} , /*Configs*/ { freezeTableName:true, tableName: 'user_account_login', underscored: true, timestamps: true, created_at: true, updated_at: false } )

const Blog_Post = sequelize.define('blog_post', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }
    //,uid: { type: Sequelize.INTEGER, references: { model: User, key: 'id',  deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE } }
    ,title: { type: Sequelize.STRING, allowNull: false }
    ,summary: Sequelize.TEXT
    ,content: Sequelize.TEXT
    ,created_at: Sequelize.DATE
    ,updated_at: Sequelize.DATE
} , /*Configs*/ { freezeTableName:true, tableName: 'blog_post', underscored: true, } )

/**********/
Blog_Post.belongsTo(User);
User.hasMany(Blog_Post);
sequelize.sync()

/* Routes */
router.route('/posts')
.all((req,res,next) => {
    // Add Middleware here!
    next();
})
.get((req, res, next) => {
    Blog_Post.findAll(
        {
            attributes: ['id', 'title', 'summary', 'created_at']
            ,include: [{
                attributes: ['first_name', 'last_name']
                ,model: User
                ,required: true
            }]
            ,where: {user_account_id: 1}
        }
        ).then( posts => {
            res.json(posts)
    })
})
.post((req, res, next) => {
    var val = Blog_Post.create({ user_account_id: 1, title: 'Memes and dreams', summary: 'Memes...', content: 'SO MANY MEMES' })
    .then( val => {
        res.json(val);
    }).catch( err => {
        console.log(err)
        res.json({success:false, content:null, error:'Failed to create blog post.'})
    })
})
.put((req, res, next) => {
    next(new Error('Not implemented'));
})
.delete((req, res, next) => {
    next(new Error('Not implemented'));
})

router.route('/users')
.all((req,res,next) => {
    // Add Middleware here!
    next();
})
.get((req, res, next) => {
    Blog_Post.findAll(
        {
            attributes: ['id', 'title', 'summary', 'created_at']
            ,include: [{
                attributes: ['first_name', 'last_name']
                ,model: User
                ,required: true
            }]
            ,where: {user_account_id: 1}
        }
        ).then( posts => {
            res.json(posts)
    })
})
.post((req, res, next) => {
    var val = User.create({ first_name: 'Jenna', last_name: 'Przybyla', email: 'notme@garrettswann.me' })
    .then( val => {
        res.json(val);
        
    }).catch( err => {
        console.log(err)
        res.json({success:false, content:null, error:'Failed to create User account.'})
    })
})
.put((req, res, next) => {
    next(new Error('Not implemented'));
})
.delete((req, res, next) => {
    next(new Error('Not implemented'));
})


module.exports = router;
