const express   = require('express'),
        app     = express();
const mysql     = require('mysql');
const        db     = require('../config/config');

// app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3008;

//mysql pool
const pool = mysql.createPool(db.db);


app.get('/hello', function(req,res) {
    res.send('hello!')
})


app.get('/players/search', function(req,res) {
    const q = "SELECT * FROM Baseball_Player;"
    pool.query(q, (err, result) =>{
        if(err) throw err;
        res.send(result)
    })
})




app.listen(port, () => {
    console.log(`Server Running! on port ${port}`)
})