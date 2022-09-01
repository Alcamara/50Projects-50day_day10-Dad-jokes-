const express = require('express')
const app = express()

const post = 5000;


app.use(express.static('server/public'));

app.listen(post, ()=>{
    console.log('listening on port:', post)
})

app.get('/Chuck-jokes', (req,res)=>{
    console.log('test');
})