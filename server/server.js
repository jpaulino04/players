const express  = require('express'),
        app    = express();


const port = process.env.PORT || 3008;


app.get('/hello', function(req,res) {
    res.send('hello!')
})





app.listen(port, () => {
    console.log(`Server Running! on port ${port}`)
})