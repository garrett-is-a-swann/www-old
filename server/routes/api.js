const express = require('express');
const router = express.Router();

/* API DESCRIPTION *\

    URL: /
    Function:
    Action:

\*                 */


// GET api listing 
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;
