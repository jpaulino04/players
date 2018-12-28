const express  = require('express'),
        app    = express();

// app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3008;


app.get('/hello', function(req,res) {
    res.send('hello!')
})





app.listen(port, () => {
    console.log(`Server Running! on port ${port}`)
})